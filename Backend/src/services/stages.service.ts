import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../errors/httpError";
import { getOrThrowError } from "../helpers/getOrThrowError";


export async function findAll() {
    return await db.stages.findMany();
};
export async function findById(id: string) {
    const stage = await db.stages.findUnique({ where: { id } });
    if (!stage) throw new HttpError(404, 'Stage not found');
    return stage;
};
export async function create(data: { name: string, festivalId: string, }) {
    try {
        return await db.stages.create({ data });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('name')) {
                throw new HttpError(409, 'Stage already exists');
            }
        }

        throw new HttpError(500, 'Failed to create Stage');
    }
};
export async function update(id: string, data: { festivalId?: string, name?: string }) {
    await getOrThrowError('stages', id, "Stage not found")

    try {
        return await db.stages.update({ where: { id }, data });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('name')) {
                throw new HttpError(409, 'Festival already exists');
            }
        }

        throw new HttpError(500, 'Failed to update stage');
    }
};

export async function deleteItem(id: string) {
    await getOrThrowError('stages', id, "Stage not found")

    try {
        return await db.stages.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete stage');
    }
};
