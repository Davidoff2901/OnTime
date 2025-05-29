import jwt from "jsonwebtoken";

const SECRET = process.env.SECRET_KEY;

export function generateJWT(payload: object): string {
  return jwt.sign(payload, SECRET!, { expiresIn: "1h" });
}

export function verifyJWT(token: string): any {
  return jwt.verify(token, SECRET!);
}
