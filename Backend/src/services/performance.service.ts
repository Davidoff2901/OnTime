import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getByIdOrThrowError } from "../helpers/getOrThrowError";


export async function findAll() {
    const artists = await db.artistPerformance.findMany({
        include: { artist: true, stage: { include: { festival: true } } }, // Include related artist and stage (with festival)
        orderBy: { day: 'asc', start_time: 'asc' },
    });
    if (!artists) throw new HttpError(404, 'No performances found');
    return artists;
};
export async function findById(artistId: string, stageId: string, day: Date) {
    const artist = await db.artistPerformance.findUnique({
        where: {
            artistId_stageId_day: {
                artistId,
                stageId,
                day
            }
        },
        include: { artist: true, stage: { include: { festival: true } } },
    });
    if (!artist) throw new HttpError(404, 'Performance not found');
    return artist;
};

export async function getArtistPerformancesByStage(stageId: string) {
    return db.artistPerformance.findMany({
        where: { stageId },
        include: { artist: true },
        orderBy: { day: 'asc', start_time: 'asc' },
    });
}

export async function getArtistPerformancesByArtist(artistId: string) {
    return db.artistPerformance.findMany({
        where: { artistId },
        include: { stage: { include: { festival: true } } },
        orderBy: { day: 'asc', start_time: 'asc' },
    });
}
export async function create(data: { name: string, genre: string, artistId: string, stageId: string }) {
    try {
        const artistExists = await db.artists.findUnique({ where: { id: data.artistId } });
        if (!artistExists) {
            throw new HttpError(404, 'Artist not found.');
        }
        const stageExists = await db.stages.findUnique({ where: { id: data.stageId } });
        if (!stageExists) {
            throw new HttpError(404, 'Stage not found.');
        }
        return await db.artists.create({ data });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('name')) {
                throw new HttpError(409, 'Artist already exists');
            }
        }

        throw new HttpError(500, 'Failed to create Artist');
    }
};
export async function update(artistId: string, stageId: string, day: Date, data: { stageId: string, day?: Date }) {
    try {
        return await db.artistPerformance.update({
            where: {
                artistId_stageId_day: {
                    artistId, stageId, day
                }
            }, data
        });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target) {
                throw new HttpError(409, 'Performance already exists');
            }
        }

        throw new HttpError(500, 'Failed to update artist');
    }
};

export async function deleteItem(artistId: string, stageId: string, day: Date) {
    try {
        return await db.artistPerformance.delete({
            where: {
                artistId_stageId_day: { artistId, stageId, day }
            }
        });
    } catch {
        throw new HttpError(500, 'Failed to delete artist');
    }
};
