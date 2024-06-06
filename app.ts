import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import mongoose from "mongoose";
import { fileURLToPath } from "url";

import globalErrorHandler from "./middlewares/errorHandler";

dotenv.config();

const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Check if the environment variable MONGODB_URL is defined
if (!process.env.MONGODB_URL) {
  console.error(
    "Error: MONGODB_URL is not defined in the environment variables"
  );
  process.exit(1);
}

// DATABASE
if (typeof process.env.MONGODB_URL === "string")
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Database connection successful");
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });

// MIDDLEWARE
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

// BUILT-IN
app.use(cors());
app.use(express.json());

// STATIC FILES
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
const pathPrefix = "/api/v1";

//ERROR HANDLERS
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use(globalErrorHandler);

// SERVER INIT
const port = typeof(process.env.PORT) === "string" ? +process.env.PORT : 3000;
app.listen(port, () => {
  console.log(`Server is running. Use our API on port: ${port}`);
});
