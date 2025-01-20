import Post from "../models/post.model.js"

// Declare and export getPost
export const getPosts = async (req, res) => {
    const post = await Post.find();
    res.status(200).send(posts);
}