import express from "express";
import {
  addQuestion,
  getQuestions,
} from "../controllers/questionController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/",
  protect,
  addQuestion
);

router.get(
  "/",
  getQuestions
);

export default router;