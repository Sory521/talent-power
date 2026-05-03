import dotenv from "dotenv";
import app from "./app";
import { connectPostgresDB } from "./config/db/prisma";

dotenv.config();

const PORT = Number(process.env.PORT || "8000");

connectPostgresDB();

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `server started at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`,
  );
});
