import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";


export async function findById(id: string) {
    const lineup = await db.userLineup.findUnique({ where: { id } });
    if (!lineup) throw new HttpError(404, 'Lineup not found');
    return lineup;
};
export async function create(data: { userId: string, festivalId: string }) {
    try {
        return await db.userLineup.create({ data });
    } catch (error: any) {

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
