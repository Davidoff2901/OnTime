import { db } from "../db/db";
import { HttpError } from "../errors/httpError";


export async function findAll() {
    return await db.tickets.findMany();
};

export async function findById(id: string) {
    const stage = await db.stages.findUnique({ where: { id } });
    if (!stage) throw new HttpError(404, 'Stage not found');
    return stage;
};

export async function create(data: { userId: string, festivalId: string, }) {
    try {
        return await db.tickets.create({ data });
    } catch (error: any) {
        throw new HttpError(500, 'Failed to create ticket');
    }
};
// export async function update(id: string, data: { name?: string, location?: number[], start_date?: Date, end_date?: Date }) {
//     await findById(id);
//     try {
//         return await db.tickets.update({ where: { id }, data });
//     } catch (error: any) {
//         if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
//             const target = (error.meta?.target as string[]) || [];

//             if (target.includes('name')) {
//                 throw new HttpError(409, 'Festival already exists');
//             }
//         }

//         throw new HttpError(500, 'Failed to update user');
//     }
// };

export async function deleteItem(id: string) {
    await findById(id);
    try {
        return await db.tickets.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete ticket');
    }
};
