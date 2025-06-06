import { NextFunction, Request, Response } from "express";
import * as performancesService from '../services/performance.service'
import { HttpError } from "../helpers/httpError";


export async function getAllPerformances(req: Request, res: Response, next: NextFunction) {
    try {
        const performances = await performancesService.findAll();
        res.status(200).json(performances);
    } catch (err) {
        next(err)
    }
};

export async function getPerformanceByID(req: Request, res: Response, next: NextFunction) {
    try {
        const day = new Date(req.params.day)
        const festival = await performancesService.findById(req.params.artisId, req.params.stageId, day);
        res.status(200).json(festival);
    } catch (err) {
        next(err)
    }
};
export async function getPerformancesByStage(req: Request, res: Response, next: NextFunction) {
    try {
        const { stageId } = req.params;
        const performances = await performancesService.getArtistPerformancesByStage(stageId);
        res.status(200).json(performances);
    } catch (err) {
        next(err)
    }
}

export async function getPerformancesByArtist(req: Request, res: Response, next: NextFunction) {
    try {
        const { artistId } = req.params;
        const performances = await performancesService.getArtistPerformancesByArtist(artistId);
        res.status(200).json(performances);
    } catch (err) {
        next(err)
    }
}

export async function createPerformance(req: Request, res: Response, next: NextFunction) {
    try {
        const data = {
            ...req.body,
            day: new Date(req.body.day),
            start_time: new Date(req.body.start_time),
            end_time: new Date(req.body.end_time),
        };

        const festival = await performancesService.create(data);
        res.status(201).json(festival);
    } catch (err) {
        next(err)
    }
};

export async function updatePerformance(req: Request, res: Response, next: NextFunction) {
    try {
        const day = new Date(req.params.day);
        const data = {
            ...req.body,
            // Convert dates if provided in the update body
            start_time: req.body.start_time ? new Date(req.body.start_time) : undefined,
            end_time: req.body.end_time ? new Date(req.body.end_time) : undefined,
        };

        if (!data.start_date || !data.end_date) {
            throw new HttpError(400, "No valid dates")
        }
        const festival = await performancesService.update(req.params.artisId, req.params.stageId, day, req.body);
        res.status(200).json(festival);
    } catch (err) {
        next(err)
    }
};
export async function deletePerformance(req: Request, res: Response, next: NextFunction) {
    try {
        const day = new Date(req.params.day);
        await performancesService.deleteItem(req.params.artisId, req.params.stageId, day);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};