import { Request, Response } from "express";
import * as stageService from '../services/stages.service'
import { handleError } from "../errors/httpError";


export async function getAllStages(req: Request, res: Response) {
    try {
        const stages = await stageService.findAll();
        res.json(stages);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch artists' });
    }
};

export async function getStageById(req: Request, res: Response) {
    try {
        const stage = await stageService.findById(req.params.id);
        res.json(stage);
    } catch (err) {
        handleError(res, err);
    }
};

export async function createStage(req: Request, res: Response) {
    try {
        const stage = await stageService.create(req.body);
        res.status(201).json(stage);
    } catch (err) {
        handleError(res, err);
    }
};

export async function updateStage(req: Request, res: Response) {
    try {
        const stage = await stageService.update(req.params.id, req.body);
        res.json(stage);
    } catch (err) {
        handleError(res, err);
    }
};
export async function deleteStage(req: Request, res: Response) {
    try {
        await stageService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        handleError(res, err);
    }
};