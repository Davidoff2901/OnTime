import { NextFunction, Request, Response } from "express";
import * as ticketsService from '../services/tickets.service'

export async function getAllTickets(req: Request, res: Response, next: NextFunction) {
    try {
        const tickets = await ticketsService.findAll();
        res.json(tickets);
    } catch (err) {
        next(err)
    }
};
export async function getTicketById(req: Request, res: Response, next: NextFunction) {
    try {
        const ticket = await ticketsService.findById(req.params.id);
        res.json(ticket);
    } catch (err) {
        next(err)
    }
};

export async function createTicket(req: Request, res: Response, next: NextFunction) {
    try {
        const ticket = await ticketsService.create(req.body);
        res.status(201).json(ticket);
    } catch (err) {
        next(err)
    }
};

// export async function updateTicket(req: Request, res: Response) {
//     try {
//            const stage = await ticketsService.update(req.params.id, req.body);
//            res.json(stage);
//        } catch (err) {
//            handleError(res, err);
//        }
// };
export async function deleteTicket(req: Request, res: Response, next: NextFunction) {
    try {
        await ticketsService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};