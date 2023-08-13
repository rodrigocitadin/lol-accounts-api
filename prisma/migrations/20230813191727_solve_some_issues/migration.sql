/*
  Warnings:

  - You are about to drop the `transaction` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_accountId_fkey";

-- DropForeignKey
ALTER TABLE "transaction" DROP CONSTRAINT "transaction_payerId_fkey";

-- DropTable
DROP TABLE "transaction";

-- CreateTable
CREATE TABLE "UserTransaction" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "UserTransaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" TEXT NOT NULL,
    "payeeId" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "ammount" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTransaction_transactionId_key" ON "UserTransaction"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_accountId_key" ON "Transaction"("accountId");

-- AddForeignKey
ALTER TABLE "UserTransaction" ADD CONSTRAINT "UserTransaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTransaction" ADD CONSTRAINT "UserTransaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_payeeId_fkey" FOREIGN KEY ("payeeId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
