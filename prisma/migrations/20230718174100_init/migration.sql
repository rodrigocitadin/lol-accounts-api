-- CreateTable
CREATE TABLE "LolAccount" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sold" BOOLEAN DEFAULT false,
    "level" INTEGER DEFAULT 30,
    "blueEssence" INTEGER NOT NULL,
    "skinQuantity" INTEGER NOT NULL,
    "championQuantity" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "LolAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LolAccount_username_key" ON "LolAccount"("username");

-- CreateIndex
CREATE UNIQUE INDEX "LolAccount_email_key" ON "LolAccount"("email");
