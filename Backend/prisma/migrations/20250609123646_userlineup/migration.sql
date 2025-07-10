/*
  Warnings:

  - You are about to drop the `UserLineupItem` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[festivalId,userId]` on the table `Tickets` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,artistPerformanceId]` on the table `UserLineup` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `artistPerformanceId` to the `UserLineup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserLineupItem" DROP CONSTRAINT "UserLineupItem_artistsId_fkey";

-- DropForeignKey
ALTER TABLE "UserLineupItem" DROP CONSTRAINT "UserLineupItem_userLineupId_fkey";

-- AlterTable
ALTER TABLE "Tickets" ADD COLUMN     "purchased" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "UserLineup" ADD COLUMN     "artistPerformanceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "UserLineupItem";

-- CreateIndex
CREATE UNIQUE INDEX "Tickets_festivalId_userId_key" ON "Tickets"("festivalId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserLineup_userId_artistPerformanceId_key" ON "UserLineup"("userId", "artistPerformanceId");

-- AddForeignKey
ALTER TABLE "UserLineup" ADD CONSTRAINT "UserLineup_artistPerformanceId_fkey" FOREIGN KEY ("artistPerformanceId") REFERENCES "ArtistPerformance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
