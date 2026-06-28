import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "info", "warn", "error"]
      : ["error"],
});

const connectDb = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

const disconnectDb = async () => {
  try {
    await prisma.$disconnect();
    console.log("Database disconnected");
  } catch (error) {
    console.error("Database disconnection error:", error);
  }
}


export { prisma, connectDb, disconnectDb };
