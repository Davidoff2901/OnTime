import { Request, Response } from "express";
import { db } from "../db/db";
import * as ticketsService from '../services/tickets.service'
import { handleError } from "../errors/httpError";

export async function getAllTickets(req: Request, res: Response) {
    try {
        const tickets = await ticketsService.findAll();
        res.json(tickets);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch tickets' });
    }
};
export async function getTicketById(req: Request, res: Response) {
    try {
        const ticket = await ticketsService.findById(req.params.id);
        res.json(ticket);
    } catch (err) {
        handleError(res, err);
    }
};

export async function createTicket(req: Request, res: Response) {
    try {
        const ticket = await ticketsService.create(req.body);
        res.status(201).json(ticket);
    } catch (err) {
        handleError(res, err);
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
export async function deleteTicket(req: Request, res: Response) {
    try {
        await ticketsService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        handleError(res, err);
    }
};