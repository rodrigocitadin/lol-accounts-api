/*
  Warnings:

  - You are about to alter the column `price` on the `Account` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(9,2)`.

*/
-- AlterTable
ALTER TABLE "Account" ALTER COLUMN "price" SET DATA TYPE DECIMAL(9,2);

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" DECIMAL(9,2) NOT NULL DEFAULT 0.00;

-- CreateTable
CREATE TABLE "transaction" (
    "id" TEXT NOT NULL,
    "payerId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,

    CONSTRAINT "transaction_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_payerId_fkey" FOREIGN KEY ("payerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaction" ADD CONSTRAINT "transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
