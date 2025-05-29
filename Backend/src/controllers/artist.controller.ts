import { Request, Response } from "express";
import * as artistService from '../services/artist.service'
import { handleError } from "../helpers/httpError";


export async function getAllArtists(req: Request, res: Response) {
    try {
        const users = await artistService.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch artists' });
    }
};

export async function getArtistById(req: Request, res: Response) {
    try {
        const artist = await artistService.findById(req.params.id);
        res.json(artist);
    } catch (err) {
        handleError(res, err);
    }
};

export async function createArtist(req: Request, res: Response) {
    try {
        const artist = await artistService.create(req.body);
        res.status(201).json(artist);
    } catch (err) {
        handleError(res, err);
    }
};

export async function updateArtist(req: Request, res: Response) {
    try {
        const artist = await artistService.update(req.params.id, req.body);
        res.json(artist);
    } catch (err) {
        handleError(res, err);
    }
};
export async function deleteArtist(req: Request, res: Response) {
    try {
        await artistService.deleteItem(req.params.id);
        res.status(204).send();
    } catch (err) {
        handleError(res, err);
    }
};
