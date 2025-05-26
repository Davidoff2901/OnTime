import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../errors/httpError";
import bcrypt from 'bcryptjs';
import { getOrThrowError } from "../helpers/getOrThrowError";

export async function findAllUsers() {
    // return await db.users.findMany({
    //     orderBy: { first_name: 'desc' },
    // });
    const users = await db.users.findMany({
        orderBy: { first_name: 'desc' },
    });
    return users.map(({ id, password, ...filtered }) => filtered)
};
export async function findUserById(id: string) {
    const user = await db.users.findUnique({ where: { id } });
    if (!user) throw new HttpError(404, 'User not found');
    return user;
};
export async function createUser(data: { first_name: string, last_name: string, password: string, email: string }) {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10); // 10 is the salt rounds
        return await db.users.create({
            data: {
                first_name: data.first_name,
                last_name: data.last_name,
                password: hashedPassword,
                email: data.email
            },
            select: {
                first_name: true,
                last_name: true,
                birthday: true,
                country_code: true,
                email: true,
                phone: true
            }
        });
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
    await getOrThrowError('users', id, "User not found")

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
    await getOrThrowError('users', id, "User not found")
    try {
        return await db.users.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete user');
    }
};
