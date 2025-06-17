import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";


export async function findAll() {
    const artists = await db.artistPerformance.findMany({
        include: {
            artist: true,
            stage: { select: { id: true, name: true } },
            festival: { select: { id: true, name: true, start_date: true, end_date: true } }
        },
    });
    if (!artists) throw new HttpError(404, 'No performances found');
    return artists;
};
// export async function findAllByFilters(filters?: { festivalId?: string; stageId?: string; day?: Date }) {
//     const artists = await db.artistPerformance.findMany({
//         where: filters,
//         include: { artist: true, stage: true, festival: { select: { name: true, start_date: true, end_date: true } } },
//         orderBy: { day: 'asc', start_time: 'asc' },
//     });
//     if (!artists) throw new HttpError(404, 'No performances found');
//     return artists;
// };
export async function findById(id: string) {
    const artist = await db.artistPerformance.findUnique({
        where: { id },
        include: { artist: true, stage: { include: { festival: true } } },
    });
    if (!artist) throw new HttpError(404, 'Performance not found');
    return artist;
};
export async function getPerformancesForStage(
    festivalId: string,
    stageId: string,
    day?: string,
    artistName?: string
) {
    let whereClause: any = {
        festivalId: festivalId,
        stageId: stageId,
    };

    if (day) {
        const startOfDay = new Date(day);
        startOfDay.setUTCHours(0, 0, 0, 0);
        const endOfDay = new Date(day);
        endOfDay.setUTCHours(23, 59, 59, 999);

        whereClause.day = {
            gte: startOfDay.toISOString(),
            lte: endOfDay.toISOString(),
        };
    }

    if (artistName) {
        whereClause.artist = {
            name: {
                contains: artistName,
                mode: 'insensitive',
            },
        };
    }

    return db.artistPerformance.findMany({
        where: whereClause,
        include: {
            artist: true,
            stage: true,
        },
        orderBy: [
            { day: 'asc' },
            { start_time: 'asc' },
        ],
    });
}

export async function create(data: { festivalId: string, artistId: string, stageId: string, day: Date, start_time: Date, end_time: Date }) {
    if (data.start_time >= data.end_time) {
        throw new HttpError(400, 'Start time must be before end time.');
    }

    try {
        const existingPerformanceForArtistInFestival = await db.artistPerformance.findFirst({
            where: {
                artistId: data.artistId,
                festivalId: data.festivalId,
            },
        });

        if (existingPerformanceForArtistInFestival) {
            throw new HttpError(409, 'This artist is already scheduled for this festival.');
        }
    } catch (error) {
        if (error instanceof HttpError) throw error;
        throw new HttpError(500, 'Internal server error');
    }
    try {
        const startOfDay = new Date(data.day.getFullYear(), data.day.getMonth(), data.day.getDate(), 0, 0, 0, 0);
        const endOfDay = new Date(data.day.getFullYear(), data.day.getMonth(), data.day.getDate(), 23, 59, 59, 999);

        const overlappingPerformances = await db.artistPerformance.findMany({
            where: {
                stageId: data.stageId,
                day: {
                    gte: startOfDay,
                    lte: endOfDay,
                },
                OR: [
                    // Case 1: Existing performance starts within the new performance's time
                    {
                        start_time: {
                            gte: data.start_time,
                            lt: data.end_time,
                        },
                    },
                    // Case 2: Existing performance ends within the new performance's time
                    {
                        end_time: {
                            gt: data.start_time,
                            lte: data.end_time,
                        },
                    },
                    // Case 3: Existing performance completely contains the new performance
                    {
                        start_time: { lte: data.start_time },
                        end_time: { gte: data.end_time },
                    },
                ],
            },
        });

        if (overlappingPerformances.length > 0) {
            throw new HttpError(409, 'Time slot on this stage and day is already occupied.');
        }
    } catch (error) {
        if (error instanceof HttpError) throw error;
        throw new HttpError(500, 'Internal server error during performance overlap check.');
    }

    try {
        const artistExists = await db.artists.findUnique({ where: { id: data.artistId } });
        if (!artistExists) {
            throw new HttpError(404, 'Artist not found.');
        }
        const stageExists = await db.stages.findUnique({ where: { id: data.stageId } });
        if (!stageExists) {
            throw new HttpError(404, 'Stage not found.');
        }
        return await db.artistPerformance.create({
            data: {
                artist: {
                    connect: {
                        id: data.artistId
                    }
                },
                stage: {
                    connect: {
                        id: data.stageId
                    }
                },
                festival: {
                    connect: {
                        id: data.festivalId
                    }
                },
                day: data.day,
                start_time: data.start_time,
                end_time: data.end_time,
            }
        });
    } catch (error: any) {
        throw new HttpError(500, 'Failed to create Performance');
    }
};
export async function update(performanceId: string, data: { festivalId?: string, artistId?: string, stageId?: string, day?: Date, start_time?: Date, end_time?: Date }) {
    if (data.start_time && data.end_time && data.start_time >= data.end_time) {
        throw new HttpError(400, 'Start time must be before end time.');
    }

    try {
        const existingPerformance = await db.artistPerformance.findUnique({
            where: { id: performanceId },
        });

        if (!existingPerformance) {
            throw new HttpError(404, 'Performance not found.');
        }

        const festivalIdToUse = data.festivalId || existingPerformance.festivalId;
        const artistIdToUse = data.artistId || existingPerformance.artistId;
        const stageIdToUse = data.stageId || existingPerformance.stageId;
        const dayToUse = data.day || existingPerformance.day;
        const startTimeToUse = data.start_time || existingPerformance.start_time;
        const endTimeToUse = data.end_time || existingPerformance.end_time;

        if (data.artistId || data.festivalId) {
            const existingPerformanceForArtistInFestival = await db.artistPerformance.findFirst({
                where: {
                    artistId: artistIdToUse,
                    festivalId: festivalIdToUse,
                    NOT: {
                        id: performanceId,
                    },
                },
            });

            if (existingPerformanceForArtistInFestival) {
                throw new HttpError(409, 'This artist is already scheduled for this festival.');
            }
        }

        // Check for overlapping performances on the same stage and day, excluding the current performance
        if (data.stageId || data.day || data.start_time || data.end_time) {
            const startOfDay = new Date(dayToUse.getFullYear(), dayToUse.getMonth(), dayToUse.getDate(), 0, 0, 0, 0);
            const endOfDay = new Date(dayToUse.getFullYear(), dayToUse.getMonth(), dayToUse.getDate(), 23, 59, 59, 999);
            const overlappingPerformances = await db.artistPerformance.findMany({
                where: {
                    stageId: stageIdToUse,
                    day: {
                        gte: startOfDay,
                        lte: endOfDay,
                    },
                    NOT: {
                        id: performanceId,
                    },
                    OR: [
                        // Case 1: Existing performance starts within the new performance's time
                        {
                            start_time: {
                                gte: startTimeToUse,
                                lt: endTimeToUse,
                            },
                        },
                        // Case 2: Existing performance ends within the new performance's time
                        {
                            end_time: {
                                gt: startTimeToUse,
                                lte: endTimeToUse,
                            },
                        },
                        // Case 3: Existing performance completely contains the new performance
                        {
                            start_time: { lte: startTimeToUse },
                            end_time: { gte: endTimeToUse },
                        },
                    ],
                },
            });
            if (overlappingPerformances.length > 0) {
                throw new HttpError(409, 'Time slot on this stage and day is already occupied.');
            }
        }

        if (data.artistId) {
            const artistExists = await db.artists.findUnique({ where: { id: data.artistId } });
            if (!artistExists) {
                throw new HttpError(404, 'Artist not found.');
            }
        }
        if (data.stageId) {
            const stageExists = await db.stages.findUnique({ where: { id: data.stageId } });
            if (!stageExists) {
                throw new HttpError(404, 'Stage not found.');
            }
        }

        return await db.artistPerformance.update({
            where: { id: performanceId },
            data: {
                ...(data.artistId && { artist: { connect: { id: data.artistId } } }),
                ...(data.stageId && { stage: { connect: { id: data.stageId } } }),
                ...(data.festivalId && { festival: { connect: { id: data.festivalId } } }),
                ...(data.day && { day: data.day }),
                ...(data.start_time && { start_time: data.start_time }),
                ...(data.end_time && { end_time: data.end_time }),
            },
        });

    } catch (error) {
        if (error instanceof HttpError) throw error;
        throw new HttpError(500, 'Internal server error during performance update.');
    }
}

export async function deleteItem(id: string) {
    try {
        await db.userLineup.deleteMany({
            where: {
                artistPerformanceId: id
            }
        });
        return await db.artistPerformance.delete({
            where: { id }
        });
    } catch (error) {
        throw new HttpError(500, 'Failed to delete performance');
    }
};
