/*
  Warnings:

  - You are about to drop the column `location` on the `Festivals` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Festivals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Festivals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Festivals" DROP COLUMN "location",
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;
