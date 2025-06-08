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
export async function findAllByFilters(filters?: { festivalId?: string; stageId?: string; artistId?: string }) {
    const artists = await db.artistPerformance.findMany({
        where: filters,
        include: { artist: true, stage: { include: { festival: true } } },
        orderBy: { day: 'asc', start_time: 'asc' },
    });
    if (!artists) throw new HttpError(404, 'No performances found');
    return artists;
};
export async function findById(id: string) {
    const artist = await db.artistPerformance.findUnique({
        where: { id },
        include: { artist: true, stage: { include: { festival: true } } },
    });
    if (!artist) throw new HttpError(404, 'Performance not found');
    return artist;
};

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
                    gte: startOfDay, // Greater than or equal to start of the selected day
                    lte: endOfDay,   // Less than or equal to end of the selected day
                },
                OR: [
                    // Case 1: Existing performance starts within the new performance's time
                    {
                        start_time: {
                            gte: data.start_time,
                            lt: data.end_time, // `lt` to exclude exact end_time match (allows immediate succession)
                        },
                    },
                    // Case 2: Existing performance ends within the new performance's time
                    {
                        end_time: {
                            gt: data.start_time, // `gt` to exclude exact start_time match (allows immediate succession)
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
export async function update(id: string, data: { artistId?: string, stageId?: string, day?: Date, start_time?: Date, end_time?: Date }) {
    try {
        return await db.artistPerformance.update({
            where: { id }, data
        });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target) {
                throw new HttpError(409, 'Performance already exists');
            }
        }

        throw new HttpError(500, 'Failed to update performance');
    }
};

export async function deleteItem(id: string) {
    try {
        return await db.artistPerformance.delete({
            where: { id }
        });
    } catch {
        throw new HttpError(500, 'Failed to delete artist');
    }
};
