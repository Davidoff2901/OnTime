/*
  Warnings:

  - The primary key for the `ArtistPerformance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ArtistPerformance` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ArtistPerformance" DROP CONSTRAINT "ArtistPerformance_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "ArtistPerformance_pkey" PRIMARY KEY ("artistId", "stageId", "day");
