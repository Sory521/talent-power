import winston from "winston";
import "winston-daily-rotate-file";

/**
 * Define log format
 */
const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
  }),
);

/**
 * Define transports (console & rotating file logs)
 */
const logger = winston.createLogger({
  level: "info",
  format: logFormat,
  transports: [
    new winston.transports.Console(), // Logs to the console
    new winston.transports.DailyRotateFile({
      filename: "logs/application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      maxSize: "10m",
      maxFiles: "14d", // Keep logs for 14 days
    }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

export default logger;