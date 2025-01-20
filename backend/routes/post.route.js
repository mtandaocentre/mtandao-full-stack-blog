import express from "express";
import Post from "../models/post.model.js"

// Define router
const router = express.Router();

// Use router to call api
// Test request with postman
router.get("/", async (req, res) => {

    const post = await Post.find();
    res.status(200).send(post);
});

// export default
export default router