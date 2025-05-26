/*
  Warnings:

  - Added the required column `updated_at` to the `Artists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Stages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artists" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Festivals" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Stages" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
