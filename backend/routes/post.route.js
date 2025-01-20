import express from "express";
import { getPosts } from "../controllers/post.controller.js";

// Define router
const router = express.Router();

// Use router to call api
// Use post conroller to get post for posts root endpoint
router.get("/", getPosts);

// export default
export default router