import bcrypt from "bcryptjs";

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export async function comparePasswords(raw: string, hashed: string) {
  return await bcrypt.compare(raw, hashed);
}
