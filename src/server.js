import express from "express";
import { readFile } from "fs";
import { config } from "dotenv";
import { connectDb, disconnectDb } from "./config/db.js";

// routes
import movieRoutes from "./routes/movieRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import watchlistRoutes from "./routes/watchlistRoutes.js";

config(); // Load environment variables from .env file
connectDb();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// API Routes
app.use("/movies", movieRoutes);
app.use("/auth", authRoutes);
app.use("/watchlist", watchlistRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on http://localhost:3000");
});

process.on("unhandledRejection", async (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  // Application specific logging, throwing an error, or other logic here
  // await disconnectDb();
  // process.exit(1);
});

process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception thrown:", err);
  // Application specific logging, throwing an error, or other logic here
  // await disconnectDb();
  // process.exit(1);
});

process.on("SIGINT", async () => {
  console.log("SIGINT signal received: closing HTTP server");
  // await disconnectDb();
  // process.exit(0);
});
