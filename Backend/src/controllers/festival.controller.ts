import { Request, Response } from "express";
import * as festivalsService from '../services/festival.service'
import { handleError } from "../helpers/httpError";


export async function getAllFestivals(req: Request, res: Response) {
    try {
        const festivals = await festivalsService.findAll();
        res.json(festivals);
    } catch (err) {
        handleError(res, err);
    }
};

export async function getFestivalByID(req: Request, res: Response) {
    try {
        const festival = await festivalsService.findById(req.params.id);
        res.json(festival);
    } catch (err) {
        handleError(res, err);
    }
};

export async function createFestival(req: Request, res: Response) {
    try {
        const festival = await festivalsService.create(req.body);
        res.status(201).json(festival);
    } catch (err) {
        handleError(res, err);
    }
};

export async function updateFestival(req: Request, res: Response) {
    try {
        const festival = await festivalsService.update(req.params.id, req.body);
        res.json(festival);
    } catch (err) {
        handleError(res, err);
    }
};
export async function deleteFestival(req: Request, res: Response) {
    try {
        await festivalsService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        handleError(res, err);
    }
};