import express from "express";
import { usersTable } from "../db/schema";
import { eq } from "drizzle-orm";
import { generateToken } from '../middleware/auth';
import { jwtDecode } from "jwt-decode";
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Move login endpoint
router.post("/login", async (req, res) => {
  // Your existing login logic
});

// Move me endpoint
router.get("/me", authMiddleware, async (req, res) => {
  // Your existing me logic 
});

// Move verify-token endpoint
router.get("/verify-token", (req, res) => {
  // Your existing verify logic
});

export default router;