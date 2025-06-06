import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { HttpError } from "./httpError";

const SECRET = process.env.SECRET_KEY;

export function generateJWT(payload: object): string {
  return jwt.sign(payload, SECRET!, { expiresIn: "1h" });
}

export function verifyJWT(token: string): any {
  return jwt.verify(token, SECRET!);
}


//JWT middleware

export interface AuthenticatedRequest extends Request {
  user?: {
    email: string,
    role: string
  };
}

export function authenticateJWT(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new HttpError(401, 'Missing or invalid token');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyJWT(token)
    req.user = decoded.filtered;
    next();
  } catch (err) {
    throw new HttpError(401, 'Unauthorized: Invalid token')
  }
}

export function authorizeRoles(...allowedRoles: string[]) {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) { 
      throw new HttpError(403, 'Forbidden: Insufficient permissions')
    }
    next();
  };
}