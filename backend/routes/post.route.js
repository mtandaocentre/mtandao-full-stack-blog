import express from "express";

// Define router
const router = express.Router();

// Use router to call api
router.get("/post-test", (req, res) => {
    res.status(200).send("Post Route")
})

// export default
export default router