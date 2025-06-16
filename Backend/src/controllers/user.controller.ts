import { NextFunction, Request, Response } from "express";
import * as userService from "../services/user.service"
import { HttpError } from "../helpers/httpError";


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
        const user = await userService.updateUser(req.params.email, req.body);
        res.json(user);
    } catch (err) {
        next(err)
    }
};
export async function changePassword(req: Request, res: Response, next: NextFunction) {
    try {
        const user = await userService.changePassword(req.body.email, req.body.old_password, req.body.new_password);
        res.json(user);
    } catch (err) {
        next(err)
    }
};
export async function forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
        const { email } = req.body;
        if (!email) {
            throw new HttpError(400, "Email is required!")
        }
        const result = await userService.forgotPassword(email);
        res.status(200).json(result);
    } catch (err) {
        next(err)
    }
};
export async function resetPassword(req: Request, res: Response, next: NextFunction) {
    try {
        const { token } = req.query;
        const { new_password } = req.body; 

        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/

        if (!token || typeof token !== 'string') {
            throw new HttpError(400, "Invalid or missing token.")
        }
        if (!new_password || !regex.test(new_password)) {
            throw new HttpError(400, "New password does not meet requirements.")
        }

        const result = await userService.resetPassword(token, new_password);
        res.status(200).json(result);
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

