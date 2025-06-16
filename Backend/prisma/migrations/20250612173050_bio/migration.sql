/*
  Warnings:

  - Made the column `bio` on table `Artists` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Artists" ALTER COLUMN "bio" SET NOT NULL;
