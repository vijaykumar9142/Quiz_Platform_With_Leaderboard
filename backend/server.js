import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import leaderboardRoutes from "./routes/leaderboardRoutes.js";
import scoreRoutes from "./routes/scoreRoutes.js";
import questionRoutes from "./routes/questionRoutes.js";
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Quiz India API Running");
});

app.use("/api/auth", authRoutes);
app.use(
  "/api/leaderboard",
  leaderboardRoutes
);
app.use("/api/score", scoreRoutes);
app.use(
  "/api/questions",
  questionRoutes
);
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});