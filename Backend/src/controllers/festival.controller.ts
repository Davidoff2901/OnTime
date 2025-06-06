import { NextFunction, Request, Response } from "express";
import * as festivalsService from '../services/festival.service'


export async function getAllFestivals(req: Request, res: Response, next: NextFunction) {
    try {
        const festivals = await festivalsService.findAll();
        res.status(200).json(festivals);
    } catch (err) {
        next(err)
    }
};

export async function getFestivalByID(req: Request, res: Response, next: NextFunction) {
    try {
        const festival = await festivalsService.findById(req.params.id);
        res.status(200).json(festival);
    } catch (err) {
        next(err)
    }
};

export async function createFestival(req: Request, res: Response, next:NextFunction) {
    try {
        const user = (req as Request & { user: { email: string } }).user;

        const festival = await festivalsService.create(req.body, user.email);
        res.status(201).json(festival);
    } catch (err) {
        next(err)
    }
};

export async function updateFestival(req: Request, res: Response, next: NextFunction) {
    try {
        const festival = await festivalsService.update(req.params.id, req.body);
        res.status(200).json(festival);
    } catch (err) {
        next(err)
    }
};
export async function deleteFestival(req: Request, res: Response, next: NextFunction) {
    try {
        await festivalsService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};