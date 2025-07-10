/*
  Warnings:

  - Made the column `address` on table `Festivals` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Festivals" ALTER COLUMN "address" SET NOT NULL,
ALTER COLUMN "address" DROP DEFAULT;
