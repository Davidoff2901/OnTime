import { NextFunction, Request, Response } from "express";
import * as stageService from '../services/stages.service'


export async function getAllStages(req: Request, res: Response, next: NextFunction) {
    try {
        const stages = await stageService.findAll();
        res.json(stages);
    } catch (err) {
        next(err)
    }
};

export async function getStageById(req: Request, res: Response, next: NextFunction) {
    try {
        const stage = await stageService.findById(req.params.id);
        res.json(stage);
    } catch (err) {
        next(err)
    }
};
export async function getStagesByFestival(req: Request, res: Response, next: NextFunction) {
    try {
        const stages = await stageService.findStagesByFestival(req.params.id);
        res.status(200).json(stages);
    } catch (err) {
        next(err)
    }
}

export async function createStage(req: Request, res: Response, next: NextFunction) {
    try {
        const stage = await stageService.create(req.body);
        res.status(201).json(stage);
    } catch (err) {
        next(err)
    }
};

export async function updateStage(req: Request, res: Response, next: NextFunction) {
    try {
        const stage = await stageService.update(req.params.id, req.body);
        res.status(200).json(stage);
    } catch (err) {
        next(err)
    }
};
export async function deleteStage(req: Request, res: Response, next: NextFunction) {
    try {
        await stageService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};