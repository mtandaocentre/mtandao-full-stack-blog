import express from "express";
import { addComments, deleteComments, getPostComments } from "../controllers/comment.controller.js";

// Define router
const router = express.Router();

// Use router to make api call
router.get("/:postId", getPostComments)
router.post("/:postId", addComments)
router.delete("/:postId", deleteComments)

// Export router
export default router