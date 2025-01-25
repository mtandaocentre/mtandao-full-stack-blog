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

// Declare and export craetePost to create a post
export const createPost = async (req, res) => {
    
    const newPost = new Post(req.body);
   
    const post = await newPost.save();
    res.status(200).send(post);

}

// Declare and export deletePost to delete a post
export const deletePost = async (req, res) => {
   
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).send("Post has been deleted.");

}
