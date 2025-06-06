import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service"


export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await userService.findAllUsers();
        res.json(users);
    } catch (err) {
        next(err)
    }
};

export async function getUserByID(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.findUserById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err)
    }
};

export async function createUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (err) {
        next(err)
    }
};
export async function login(req: Request, res: Response, next: NextFunction) {
    try {
        const token = await userService.loginUser(req.body);
        res.json(token);
    } catch (err) {
        next(err)
    }
};


export async function updateUser(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        next(err)
    }
};
export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
        await userService.deleteUserById(req.params.id);
        res.status(204).send();
    } catch (err) {
        next(err)
    }
};

