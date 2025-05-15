/*
  Warnings:

  - You are about to drop the `Ticket` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_userId_fkey";

-- DropTable
DROP TABLE "Ticket";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Festivals" (
    "id" TEXT NOT NULL,
    "organiserId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "location" DOUBLE PRECISION[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Festivals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stages" (
    "id" TEXT NOT NULL,
    "festivalId" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Stages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArtistPerformance" (
    "artistId" TEXT NOT NULL,
    "stageId" TEXT NOT NULL,
    "day" TIMESTAMP(3) NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ArtistPerformance_pkey" PRIMARY KEY ("artistId","stageId","day")
);

-- CreateTable
CREATE TABLE "Artists" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "genre" TEXT NOT NULL,

    CONSTRAINT "Artists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLineup" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "festivalId" TEXT NOT NULL,

    CONSTRAINT "UserLineup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserLineupItem" (
    "userLineupId" TEXT NOT NULL,
    "artistsId" TEXT NOT NULL,

    CONSTRAINT "UserLineupItem_pkey" PRIMARY KEY ("userLineupId","artistsId")
);

-- CreateTable
CREATE TABLE "Tickets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "festivalId" TEXT NOT NULL,

    CONSTRAINT "Tickets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Festivals" ADD CONSTRAINT "Festivals_organiserId_fkey" FOREIGN KEY ("organiserId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stages" ADD CONSTRAINT "Stages_festivalId_fkey" FOREIGN KEY ("festivalId") REFERENCES "Festivals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistPerformance" ADD CONSTRAINT "ArtistPerformance_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ArtistPerformance" ADD CONSTRAINT "ArtistPerformance_stageId_fkey" FOREIGN KEY ("stageId") REFERENCES "Stages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLineup" ADD CONSTRAINT "UserLineup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLineup" ADD CONSTRAINT "UserLineup_festivalId_fkey" FOREIGN KEY ("festivalId") REFERENCES "Festivals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLineupItem" ADD CONSTRAINT "UserLineupItem_userLineupId_fkey" FOREIGN KEY ("userLineupId") REFERENCES "UserLineup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLineupItem" ADD CONSTRAINT "UserLineupItem_artistsId_fkey" FOREIGN KEY ("artistsId") REFERENCES "Artists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tickets" ADD CONSTRAINT "Tickets_festivalId_fkey" FOREIGN KEY ("festivalId") REFERENCES "Festivals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
