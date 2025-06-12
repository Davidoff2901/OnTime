/*
  Warnings:

  - A unique constraint covering the columns `[festivalId,userId]` on the table `Tickets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Tickets_festivalId_userId_key" ON "Tickets"("festivalId", "userId");
