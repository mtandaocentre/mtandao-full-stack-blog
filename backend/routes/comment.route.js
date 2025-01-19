import express from "express";

// Define router
const router = express.Router();

// Use router to make api call
router.get("/comment-test", (req,res) => {
    res.status(200).send("Comment Route")
})

// Export router
export default router