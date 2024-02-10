import { PrismaClient } from "prisma/client";

const globalthisForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

const prisma =
    globalthisForPrisma.prisma || new PrismaClient({ log: ["query"] });

if (process.env.NODE_ENV !== "production") {
    globalthisForPrisma.prisma = prisma;
}
