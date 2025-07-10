import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getUserIdByEmail } from "./user.service";


export async function findById(id: string) {
    const lineup = await db.userLineup.findUnique({ where: { id } });
    if (!lineup) throw new HttpError(404, 'Lineup not found');
    return lineup;
};
export async function getUserLineupsByUser(email: string) {
    try {
        const userId = await getUserIdByEmail(email);

        if (!userId) {
            throw new HttpError(400, "User ID is required to fetch lineups.");
        }

        const userLineups = await db.userLineup.findMany({
            where: {
                userId: userId.id,
            },
            select: {
                festival: {
                    select: {
                        id: true,
                        name: true,
                        start_date: true,
                        end_date: true,
                    },
                },
                artistPerformance: {
                    select: {
                        start_time: true,
                        end_time: true,
                        day: true,
                        artist: {
                            select: {
                                name: true,
                                genre: true,
                                bio: true,
                            },
                        },
                        stage: {
                            select: {
                                name: true
                            }
                        }
                    },
                },
            },
        });

        if (!userLineups || userLineups.length === 0) {
            throw new HttpError(404, `No liked performances found for this user.`);
        }

        //restructure to put performances inside festival
        const structuredLineups = userLineups.reduce((acc: any, item: any) => {
            const festivalId = item.festival.id;
            if (!acc[festivalId]) {
                acc[festivalId] = {
                    ...item.festival,
                    performances: [],
                };
            }
            acc[festivalId].performances.push(item.artistPerformance);
            return acc;
        }, {});

        return Object.values(structuredLineups);
    } catch (error: any) {
        if (error instanceof HttpError) {
            throw error;
        }
        console.error("Error fetching user lineups:", error);
        throw new HttpError(500, 'Failed to retrieve user lineups.');
    }
}
export async function create(data: { email: string, festivalId: string, artistPerformanceId: string }) {
    try {
        const userId = await getUserIdByEmail(data.email);

        if (!userId) {
            console.error("User not found for email:", data.email);
            throw new HttpError(404, "Couldn't add lineup to user: User not found.");
        }

        if (!data.artistPerformanceId || typeof data.artistPerformanceId !== 'string') {
            console.error("Invalid or missing artistPerformanceId:", data.artistPerformanceId);
            throw new HttpError(400, "Artist Performance ID is required and must be a valid string.");
        }
        const lineupData = {
            user: {
                connect: { id: userId.id }
            },
            festival: {
                connect: { id: data.festivalId }
            },
            artistPerformance: {
                connect: { id: data.artistPerformanceId }
            }
        };

        const newUserLineup = await db.userLineup.create({
            data: lineupData
        });
    } catch (error: any) {
        if (error instanceof HttpError) throw error
        throw new HttpError(500, 'Failed to create lineup');
    }
};
export async function update(id: string, data: { festivalId: string, userId: string }) {
    await findById(id);
    try {
        return await db.userLineup.update({ where: { id }, data });
    } catch (error: any) {
        throw new HttpError(500, 'Failed to update lineup');
    }
};

export async function deleteItem(id: string) {
    await findById(id);
    try {
        return await db.userLineup.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete lineup');
    }
};
