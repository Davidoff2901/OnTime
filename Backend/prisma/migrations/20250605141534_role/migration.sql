/*
  Warnings:

  - The values [ORANISER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `organiserId` on the `Festivals` table. All the data in the column will be lost.
  - Added the required column `organizerId` to the `Festivals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('USER', 'ADMIN', 'ORANIZER');
ALTER TABLE "Users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "Users" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
ALTER TABLE "Users" ALTER COLUMN "role" SET DEFAULT 'USER';
COMMIT;

-- DropForeignKey
ALTER TABLE "Festivals" DROP CONSTRAINT "Festivals_organiserId_fkey";

-- AlterTable
ALTER TABLE "Festivals" DROP COLUMN "organiserId",
ADD COLUMN     "organizerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Festivals" ADD CONSTRAINT "Festivals_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
