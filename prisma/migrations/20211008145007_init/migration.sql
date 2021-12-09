/*
  Warnings:

  - A unique constraint covering the columns `[authorId]` on the table `Books` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Books_authorId_key" ON "Books"("authorId");
