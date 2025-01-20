import Post from "../models/post.model.js"

// Declare and export getPosts to fetch many posts
export const getPosts = async (req, res) => {
    const posts = await Post.find();
    res.status(200).send(posts);
}

// Declare and export getPost to fetch single post
export const getPost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug });
    res.status(200).send(post);
}