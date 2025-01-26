import express from "express";
import { clerkWebHook } from "../controllers/webhook.controller";

// define router
const router = express.Router();

// Create clerk endpoint
router.post("/clerk", clerkWebHook);

// Export router by default
export default router