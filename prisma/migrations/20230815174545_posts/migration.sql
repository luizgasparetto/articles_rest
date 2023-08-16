-- CreateTable
CREATE TABLE "posts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT[],

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);
