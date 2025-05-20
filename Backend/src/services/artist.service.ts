import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../errors/httpError";


export async function findAll() {
    return await db.artists.findMany();
};
export async function findById(id: string) {
    const artist = await db.artists.findUnique({ where: { id } });
    if (!artist) throw new HttpError(404, 'Artist not found');
    return artist;
};
export async function create(data: { name: string, genre: string }) {
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
    await findById(id);
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
    await findById(id);
    try {
        return await db.artists.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete artist');
    }
};
