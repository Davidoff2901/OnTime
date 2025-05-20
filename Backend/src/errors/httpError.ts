import { Response } from "express";

export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
  }
}


export function handleError(res: Response, err: unknown) {
    if (err instanceof HttpError) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
}