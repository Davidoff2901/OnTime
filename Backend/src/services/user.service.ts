import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getByIdOrThrowError } from "../helpers/getOrThrowError";
import { comparePasswords, hashPassword } from "../helpers/hash";
import { generateJWT } from "../helpers/jwt";

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
        const hashedPassword = await hashPassword(data.password);
        const user = await db.users.create({
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

        return { data: user };

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
export async function loginUser(data: { identifier: string, password: string }) {
    try {
        const user = await db.users.findFirst({
            where: {
                OR: [{ email: data.identifier }, { phone: data.identifier }],
            },
        });
        const isValid = user && await comparePasswords(data.password, user.password);
        if (!isValid || !user) {
            throw new HttpError(404, 'The email/phone and password are invalid');
        }

        const { id, password, ...filtered } = user
        const token = generateJWT({ filtered });
        return { data: token };
    } catch (err) {
        if (err instanceof HttpError) {
            throw err;
        }

        throw new HttpError(500, 'Failed to login');
    }

}

export async function updateUser(id: string, data: { first_name?: string, last_name?: string, password?: string, email?: string, phone_number?: string, birthday?: Date, country_code?: string, role?: any }) {
    await getByIdOrThrowError('users', id, "User not found")

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
export async function updatePassword(id: string, data: { password?: string }) {

}

export async function deleteUserById(id: string) {
    await getByIdOrThrowError('users', id, "User not found")
    try {
        return await db.users.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete user');
    }
};

export async function getUserIdByEmail(email: string) {
    try {
        return await db.users.findUnique({
            where: { email },
            select: {
                id: true
            }
        })
    } catch (error) {
        throw new HttpError(404, "Couldn't find user");
    }
}