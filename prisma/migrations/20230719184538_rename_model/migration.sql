/*
  Warnings:

  - You are about to drop the `LolAccount` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "LolAccount";

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sold" BOOLEAN DEFAULT false,
    "level" INTEGER DEFAULT 30,
    "elo" "Elo" NOT NULL DEFAULT 'UNRANKED',
    "blueEssence" INTEGER NOT NULL,
    "skinQuantity" INTEGER NOT NULL,
    "championQuantity" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_username_key" ON "Account"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Account_email_key" ON "Account"("email");
