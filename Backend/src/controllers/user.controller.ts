import { Request, Response } from "express";
import * as userService from "../services/user.service"
import { handleError } from "../errors/httpError";


export async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await userService.findAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch users' });
    }
};

export async function getUserByID(req: Request, res: Response) {
    try {
        const user = await userService.findUserById(req.params.id);
        res.json(user);
    } catch (err) {
        handleError(res, err);
    }
};

export async function createUser(req: Request, res: Response) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        handleError(res, err);
    }
};

export async function updateUser(req: Request, res: Response) {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        handleError(res, err);
    }
};
export async function deleteUser(req: Request, res: Response) {
    try {
        await userService.deleteUserById(req.params.id);
        res.status(204).send();
    } catch (err) {
        handleError(res, err);
    }
};

