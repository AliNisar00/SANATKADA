import express from "express";
import { config } from "dotenv";
import { errorMiddleware } from "./middleware/error.js";

config({
  path: "./data/config.env",
});

export const app = express();

// Using Middleware
app.use(express.json()); // json body parser middleware

app.get("/", (req, res, next) => {
  res.send("Working");
});

// Importing Routers
import user from "./routes/user.js";

app.use("/api/v1/user", user);

// Using Error Middleware
app.use(errorMiddleware)