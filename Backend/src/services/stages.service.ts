import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getByIdOrThrowError } from "../helpers/getOrThrowError";


export async function findStagesByFestival(festivalId: string) {
    const where = festivalId ? { festivalId } : {};
    const stages = db.stages.findMany({ where, include: { festival: true } });

    if (!stages) throw new HttpError(404, 'No stages found');
    return stages;
};
export async function findById(id: string) {
    const stage = await db.stages.findUnique({
        where: { id },
        include: { festival: true, performances: true }
    });
    if (!stage) throw new HttpError(404, 'Stage not found');
    return stage;
};

export async function create(data: { name: string, festivalId: string, }) {
    try {
        const festivalExists = await db.festivals.findUnique({
            where: { id: data.festivalId },
        });
        if (!festivalExists) {
            throw new HttpError(404, 'Festival not found.');
        }
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
    await getByIdOrThrowError('stages', id, "Stage not found")

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
    await getByIdOrThrowError('stages', id, "Stage not found")

    try {
        await db.artistPerformance.deleteMany({ where: { stageId: id } });
        return await db.stages.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete stage');
    }
};
