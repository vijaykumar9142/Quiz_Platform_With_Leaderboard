import express from "express";
import {
  registerUser,
  loginUser,
  forgotPassword,
  getProfile,
  updateProfile,
} from "../controllers/authController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Forgot Password
router.post(
  "/forgot-password",
  forgotPassword
);

// Get User Profile
router.get(
  "/profile",
  protect,
  getProfile
);

// Update User Profile
router.put(
  "/profile",
  protect,
  updateProfile
);

export default router;