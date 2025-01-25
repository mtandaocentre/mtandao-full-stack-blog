import express from "express";
import { 
    getPosts, 
    getPost, 
    createPost
} from "../controllers/post.controller.js";

// Define router
const router = express.Router();

// Use router to call api
// Use post conroller to get posts for posts root endpoint
router.get("/", getPosts);

// Use post conroller to get single post
router.get("/:slug", getPost);

// Use post conroller to create a post
router.post("/", createPost);

// export default
export default router