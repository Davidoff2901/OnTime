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

export async function getFestivalsByTicket(req: Request, res: Response, next: NextFunction) {
    try {
        const ticket = await ticketsService.findFestivalsByTicket(req.params.email);
        res.json(ticket);
    } catch (err) {
        next(err)
    }
};


export async function purchaseTicket(req: Request, res: Response, next: NextFunction) {
    try {
        const stage = await ticketsService.create( req.body);
        res.json(stage);
    } catch (err) {
        next(err)
    }
};
export async function deleteTicket(req: Request, res: Response, next: NextFunction) {
    try {
        await ticketsService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};