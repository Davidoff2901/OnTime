/*
  Warnings:

  - The primary key for the `ArtistPerformance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[stageId,day,start_time,end_time]` on the table `ArtistPerformance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[artistId,festivalId,stageId,day,start_time,end_time]` on the table `ArtistPerformance` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[festivalId]` on the table `Stages` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `festivalId` to the `ArtistPerformance` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `ArtistPerformance` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "ArtistPerformance" DROP CONSTRAINT "ArtistPerformance_pkey",
ADD COLUMN     "festivalId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ArtistPerformance_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistPerformance_stageId_day_start_time_end_time_key" ON "ArtistPerformance"("stageId", "day", "start_time", "end_time");

-- CreateIndex
CREATE UNIQUE INDEX "ArtistPerformance_artistId_festivalId_stageId_day_start_tim_key" ON "ArtistPerformance"("artistId", "festivalId", "stageId", "day", "start_time", "end_time");

-- CreateIndex
CREATE UNIQUE INDEX "Stages_festivalId_key" ON "Stages"("festivalId");

-- AddForeignKey
ALTER TABLE "ArtistPerformance" ADD CONSTRAINT "ArtistPerformance_festivalId_fkey" FOREIGN KEY ("festivalId") REFERENCES "Festivals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
