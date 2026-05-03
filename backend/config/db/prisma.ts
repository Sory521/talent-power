import { PrismaClient } from "@prisma/client";
import logger from "../logger/loggerConfig.js";

export const prisma = new PrismaClient({
  datasourceUrl: process.env.DATABASE_URL,
});

/**
 * Conneection to Postgres database
 */
export const connectPostgresDB = async () => {
  try {
    // connection activation
    await prisma.$connect();
    logger.info(`✅ Prisma connected to postgresDB.`);
  } catch (error: any) {
    logger.error(`🔴 Connection to database FAILED. Error : ${error.message}`);
  }
};