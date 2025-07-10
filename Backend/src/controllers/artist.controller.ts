import { NextFunction, Request, Response } from "express";
import * as artistService from '../services/artist.service'


export async function getAllArtists(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await artistService.findAll();
        res.json(users);
    } catch (err) {
        next(err)
    }
};

export async function getArtistById(req: Request, res: Response, next: NextFunction) {
    try {
        const artist = await artistService.findById(req.params.id);
        res.json(artist);
    } catch (err) {
        next(err)
    }
};

export async function createArtist(req: Request, res: Response, next: NextFunction) {
    try {
        const artist = await artistService.create(req.body);
        res.status(201).json(artist);
    } catch (err) {
        next(err)
    }
};

export async function updateArtist(req: Request, res: Response, next: NextFunction) {
    try {
        const artist = await artistService.update(req.params.id, req.body);
        res.json(artist);
    } catch (err) {
        next(err)
    }
};
export async function deleteArtist(req: Request, res: Response, next: NextFunction) {
    try {
        await artistService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};
