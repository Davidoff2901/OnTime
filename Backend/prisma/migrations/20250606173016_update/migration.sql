/*
  Warnings:

  - The primary key for the `ArtistPerformance` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ArtistPerformance" DROP CONSTRAINT "ArtistPerformance_pkey",
ADD CONSTRAINT "ArtistPerformance_pkey" PRIMARY KEY ("artistId", "day");
