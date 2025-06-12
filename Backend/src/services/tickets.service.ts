import { db } from "../db/db";
import { HttpError } from "../helpers/httpError";
import { getByIdOrThrowError } from "../helpers/getOrThrowError";
import { Prisma } from "@prisma/client";
import { getUserIdByEmail } from "./user.service";


export async function findAll() {
    const tickets = await db.tickets.findMany({
        include: { festival: { select: { name: true, start_date: true, end_date: true } } }
    });
    if (!tickets) throw new HttpError(404, 'No tickets found');
    return tickets;
};

export async function findById(id: string) {
    const ticket = await db.tickets.findUnique({ where: { id } });
    if (!ticket) throw new HttpError(404, 'Ticket not found');
    return ticket;
};


export async function findFestivalsByTicket(email: string) {
    const user = await getUserIdByEmail(email)

    if (!user) {
        throw new HttpError(404, "User not found.")
    }

    const festivals = await db.tickets.findMany({
        where: { userId: user.id },
        select: {
            festival: {
                select: {
                    name: true, start_date: true, end_date: true, performances: {
                        select: {
                            day: true,
                            artist: { select: { name: true, genre: true } },
                            stage: { select: { name: true } }
                        }
                    }
                }
            }
        }
    });

    if (!festivals) throw new HttpError(404, 'Festivals not found');
    return festivals;
};
export async function create(data: { email: string, festivalId: string }) {
    try {
        const user = await db.users.findUnique({
            where: { email: data.email },
            select: { id: true }
        })

        if (!user) {
            throw new HttpError(404, "No existing user to buy")
        }
        return await db.tickets.create({
            data: { userId: user.id, festivalId: data.festivalId },
            select: { purchased: true }
        });
    } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            const target = (error.meta?.target as string[]) || [];

            if (target.includes('userId')) {
                throw new HttpError(409, 'You already bought this ticket');
            }
        }
        if (error instanceof HttpError) throw error;
        throw new HttpError(500, 'Failed to purchase ticket');
    }
};

export async function deleteItem(id: string) {
    await getByIdOrThrowError('tickets', id, "Ticket not found")

    try {
        return await db.tickets.delete({ where: { id } });
    } catch {
        throw new HttpError(500, 'Failed to delete ticket');
    }
};
