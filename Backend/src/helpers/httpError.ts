import { Request, Response, NextFunction } from 'express';

export class HttpError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.name = 'HttpError';
    this.statusCode = statusCode;
  }
}


//Middleware error handling

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {

  const status = err instanceof HttpError ? err.statusCode : 500;
  const message = err.message || 'Internal Server Error';

  res.status(status).json({ status, message });
}