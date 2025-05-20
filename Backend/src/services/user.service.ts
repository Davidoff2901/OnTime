import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../errors/httpError";


export async function findAllUsers() {
    return await db.users.findMany();
};
export async function findUserById(id: string) {
    const user = await db.users.findUnique({ where: { id } });
    if (!user) throw new HttpError(404, 'User not found');
    return user;
};
export async function createUser(data: { first_name: string, last_name: string, password: string, email: string }) {
    try {
        return await db.users.create({ data });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('email')) {
                throw new HttpError(409, 'Email already exists');
            } else if (target.includes('phone')) {
                throw new HttpError(409, 'Phone number already exists');
            }
            // else {
            //     throw new HttpError(409, 'A unique constraint was violated');
            // }
        }

        throw new HttpError(500, 'Failed to create user');
    }
};
export async function updateUser(id: string, data: { first_name?: string, last_name?: string, password?: string, email?: string, phone_number?: string, birthday?: Date, country_code?: string, role?: any }) {
    await findUserById(id); // Ensures user exists
    try {
        return await db.users.update({ where: { id }, data });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('email')) {
                throw new HttpError(409, 'Email already exists');
            } else if (target.includes('phone')) {
                throw new HttpError(409, 'Phone number already exists');
            }
        }

        throw new HttpError(500, 'Failed to update user');
    }
};

export const deleteUserById = async (id: string) => {
    await findUserById(id); // Ensures user exists
    try {
        return await db.users.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete user');
    }
};
