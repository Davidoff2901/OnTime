import { NextFunction, Request, Response } from "express";
import * as lineupService from "../services/user_lineup.service"

export async function getLineup(req: Request, res: Response, next: NextFunction) {
    try {
        const lineup = await lineupService.findById(req.params.id);
        res.json(lineup);
    } catch (err) {
        next(err)
    }
};

export async function getUserLineup(req: Request, res: Response, next: NextFunction) {
    try {
        const lineup = await lineupService.getUserLineupsByUser(req.params.email);
        res.json(lineup);
    } catch (err) {
        next(err)
    }
};

export async function createLineup(req: Request, res: Response, next: NextFunction) {
    try {
        const lineup = await lineupService.create(req.body);
        res.status(201).json(lineup);
    } catch (err) {
        next(err)
    }
};

export async function updateLineup(req: Request, res: Response, next: NextFunction) {
    try {
        const lineup = await lineupService.update(req.params.id, req.body);
        res.json(lineup);
    } catch (err) {
        next(err)
    }
};
export async function deleteLineup(req: Request, res: Response, next: NextFunction) {
    try {
        await lineupService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};
