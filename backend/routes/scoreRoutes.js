import express from "express";
import { updateScore } from "../controllers/scoreController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, updateScore);

export default router;