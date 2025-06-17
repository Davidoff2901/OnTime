import { Prisma } from "@prisma/client";
import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getByIdOrThrowError } from "../helpers/getOrThrowError";
import { comparePasswords, hashPassword } from "../helpers/hash";
import { generateJWT } from "../helpers/jwt";
import crypto from 'crypto';
import sendEmail from "../helpers/email";


export async function findAllUsers() {
    const users = await db.users.findMany({
        orderBy: { first_name: 'desc' },
    });
    if (!users) throw new HttpError(404, 'No users found');

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
                throw new HttpError(409, 'Email already used');
            } else if (target.includes('phone')) {
                throw new HttpError(409, 'Phone number already used');
            }

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
        const token = generateJWT(filtered);
        return { data: token };
    } catch (err) {
        if (err instanceof HttpError) {
            throw err;
        }

        throw new HttpError(500, 'Failed to login');
    }

}

export async function updateUser(email: string, data: { first_name?: string, last_name?: string, password?: string, phone_number?: string, birthday?: Date, country_code?: string, role?: any }) {
    try {
        const user = await getUserIdByEmail(email)
        if (!user) {
            throw new HttpError(404, "User not found.")
        }
        await db.users.update({ where: { id: user.id }, data });

        const updatedUser = await db.users.findUnique({ where: { id: user.id } });
        if (!updatedUser) {
            throw new HttpError(404, "User not found after update.")
        }
        const { id, password, ...filtered } = updatedUser

        const token = generateJWT(filtered);

        return { user: updatedUser, token };
    } catch (error: any) {
        if (error instanceof HttpError) {
            throw error
        }
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

export async function changePassword(email: string, old_password: string, new_password: string) {
    try {
        const user = await db.users.findUnique({ where: { email } });

        if (!user) {
            throw new HttpError(404, 'User not found.');
        }

        const isPasswordValid = await comparePasswords(old_password, user.password);

        if (!isPasswordValid) {
            throw new HttpError(400, 'Invalid old password.');
        }

        const hashedPassword = await hashPassword(new_password);


        const updatedUser = await db.users.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                updated_at: new Date(),
            },
            select: {
                email: true,
                first_name: true,
                last_name: true,
                birthday: true,
                phone: true,
                country_code: true,
            }
        });

        return updatedUser;
    } catch (error) {
        if (error instanceof HttpError) throw error
        throw new HttpError(500, "Internal server error")
    }

}

export async function forgotPassword(email: string) {
    const user = await db.users.findUnique({
        where: { email },
    });

    if (!user) {
        throw new HttpError(404, "Something went wrong")
    }

    const resetToken = crypto.randomBytes(32).toString('hex');
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    const resetExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 mins

    await db.users.update({
        where: { id: user.id },
        data: {
            passwordResetToken: hashedToken,
            passwordResetExpires: resetExpires,
        },
    });

    const resetURL = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;

    const message = `You are receiving this email because you (or someone else) has requested the reset of a password.
    Please make a PUT request to: ${resetURL}\n\nIf you did not request this, please ignore this email.`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'Your Password Reset Token (Valid for 1 hour)',
            message: message,
            html: `<p>Hello ${user.first_name},</p>

<p>We received a request to reset your password for your account. If you made this request, please click the button below to reset your password:</p>

<p style="text-align: center;">
  <a href="${resetURL}" style="
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    border-radius: 5px;
    display: inline-block;
    font-weight: bold;
  ">Reset Password</a>
</p>

<p>If the button above doesn't work, copy and paste this link into your browser:</p>
<p><a href="${resetURL}">${resetURL}</a></p>

<p>If you didn’t request a password reset, you can safely ignore this email—your account is still secure.</p>

<p>Best regards, OnTime Support Team</p>
`,
        });

        return { success: true, message: 'Password reset link sent to your email!' };
    } catch (error) {
        if (error instanceof HttpError) throw error

        await db.users.update({
            where: { id: user.id },
            data: {
                passwordResetToken: null,
                passwordResetExpires: null,
            },
        });
        throw new HttpError(400, 'There was a problem sending the email. Please try again later.');
    }
}
export async function resetPassword(token: string, new_password: string) {
    const hashedToken = crypto.createHash('sha256').update(token).digest('hex');

    const user = await db.users.findFirst({
        where: {
            passwordResetToken: hashedToken,
            passwordResetExpires: {
                gt: new Date(),
            },
        },
    });

    if (!user) {
        throw new HttpError(401, 'Invalid or expired password reset token.');
    }

    const hashedPassword = await hashPassword(new_password);

    await db.users.update({
        where: { id: user.id },
        data: {
            password: hashedPassword,
            passwordResetToken: null,
            passwordResetExpires: null,
        },
    });

    return { success: true, message: 'Password has been reset successfully.' };
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