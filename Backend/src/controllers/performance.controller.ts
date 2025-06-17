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
        const festival = await performancesService.findById(req.params.id);
        res.status(200).json(festival);
    } catch (err) {
        next(err)
    }
};

// export async function getPerformancesByFilter(req: Request, res: Response, next: NextFunction) {
//     try {
//         const performances = await performancesService.findAllByFilters(req.params);
//         res.status(200).json(performances);
//     } catch (err) {
//         next(err)
//     }
// }
export async function getStagePerformances(req: Request, res: Response, next: NextFunction) {
    try {
        const { festivalId, stageId } = req.params;
        const { day, artistName } = req.query;

        const performances = await performancesService.getPerformancesForStage(
            festivalId,
            stageId,
            day as string | undefined,
            artistName as string | undefined
        );

        res.json(performances);
    } catch (error: any) {
        next(error)
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
        const performanceId = req.params.id;
        const updateData = req.body;


        if (!performanceId) {
            throw new HttpError(400, 'Performance ID is required.');
        }

        if (updateData.day) {
            updateData.day = new Date(updateData.day);
        }
        if (updateData.start_time) {
            updateData.start_time = new Date(updateData.start_time);
        }
        if (updateData.end_time) {
            updateData.end_time = new Date(updateData.end_time);
        }

        const updatedPerformance = await performancesService.update(performanceId, updateData);

        res.status(200).json({
            message: 'Artist performance updated successfully.',
            performance: updatedPerformance,
        });

    } catch (error) {
        next(error);
    }
};
export async function deletePerformance(req: Request, res: Response, next: NextFunction) {
    try {
        await performancesService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};