import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getByIdOrThrowError } from "../helpers/getOrThrowError";


export async function findAll() {
    return await db.festivals.findMany();
};
export async function findById(id: string) {
    const festival = await db.festivals.findUnique({ where: { id } });
    if (!festival) throw new HttpError(404, 'Festival not found');
    return festival;
};
export async function create(data: { name: string, organiserId: string, latitude: number, longitude: number, start_date: Date, end_date: Date }) {
    if (data.start_date >= data.end_date) {
        throw new HttpError(400, 'Start date must be before end date');
    }

    try {
        return await db.festivals.create({
            data, select: {
                name: true,
                created_at: true,
                start_date: true,
                end_date: true,
                latitude: true,
                longitude: true,
            }
        });
    } catch (error: any) {
        console.log(error)
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('name')) {
                throw new HttpError(409, 'Festival already exists');
            }
        }
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2003') {
            const fieldName = error.meta?.constraint || 'unknown field';

            throw new HttpError(400, `Cannot proceed: Missing related record for ${fieldName}.`);
        }

        throw new HttpError(500, 'Failed to create festival');
    }
};
export async function update(id: string, data: { name?: string, location?: number[], start_date?: Date, end_date?: Date }) {
    await getByIdOrThrowError('festivals', id, "Festival not found")
    try {
        return await db.festivals.update({ where: { id }, data });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('name')) {
                throw new HttpError(409, 'Festival already exists');
            }
        }

        throw new HttpError(500, 'Failed to update user');
    }
};

export async function deleteItem(id: string) {
    await getByIdOrThrowError('festivals', id, "Festival not found")
    try {
        return await db.festivals.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete festival');
    }
};
