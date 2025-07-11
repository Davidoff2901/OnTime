import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getByIdOrThrowError } from "../helpers/getOrThrowError";


export async function findAll() {
    const artists = await db.artists.findMany();
    if (!artists) throw new HttpError(404, 'No artists found');
    return artists;
};
export async function findById(id: string) {
    const artist = await db.artists.findUnique({
        where: { id },
        include: { performances: { include: { festival: true, stage: true } } }
    });
    if (!artist) throw new HttpError(404, 'Artist not found');
    return artist;
};
export async function create(data: { name: string, genre: string, subgenre: string, bio: string }) {
    try {
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
export async function update(id: string, data: { name?: string, genre?: string }) {
    await getByIdOrThrowError('artists', id, "Artist not found")

    try {
        return await db.artists.update({ where: { id }, data });
    } catch (error: any) {
        
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('name')) {
                throw new HttpError(409, 'Artist already exists');
            }
        }

        throw new HttpError(500, 'Failed to update artist');
    }
};

export async function deleteItem(id: string) {
    await getByIdOrThrowError('artists', id, "Artist not found")
    try {
        await db.artistPerformance.deleteMany({ where: { artistId: id } });
        return await db.artists.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete artist');
    }
};
