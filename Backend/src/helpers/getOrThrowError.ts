import { PrismaClient } from '@prisma/client';
import { HttpError } from '../errors/httpError';

const db = new PrismaClient();

type ModelDelegate = {
    findUnique: (args: any) => Promise<any>;
};

export async function getOrThrowError<T extends keyof PrismaClient>(
    modelName: T,
    id: string,
    notFoundMessage = 'Item not found'
): Promise<any> {
    const model = db[modelName as keyof PrismaClient] as unknown as ModelDelegate;

    const record = await model.findUnique({
        where: { id },
    });

    if (!record) {
        throw new HttpError(404, notFoundMessage);
    }

    return record;
}
