import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors"

import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import todoRouter from "./routes/todoRoutes.js"

const PORT = process.env.PORT || 5000;

const app = express();

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler)

const corsOptions = {
  origin: [
    "http://localhost:5173",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Listening");
});

app.use("/tasks", todoRouter);

app.listen(PORT, (req, res) => {
  console.log(`Listening on port ${PORT}`);
});
