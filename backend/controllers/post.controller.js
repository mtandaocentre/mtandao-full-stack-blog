import Post from "../models/post.model.js"
import User from "../models/user.model.js"

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

    // Check for clerkUserId before creating post
    const clerkUserId = req.auth.userId;

    if(!clerkUserId){
        res.status(401).json("You cannot create a post before being authenticated");
    };

    const user = await User.findOne({clerkUserId});

    if(!user){
        return res.status(404).json("User not found!");
    };
    
    // Create post
    const newPost = new Post({user:user._id, ...req.body});
   
    const post = await newPost.save();
    res.status(200).send(post);

}

// Declare and export deletePost to delete a post
export const deletePost = async (req, res) => {
   
    // Check if post belong to user before deleteing
    const post = await Post.findByIdAndDelete({
        id:req.params.id, 
        user: user_id
    });
    
    res.status(200).send("Post has been deleted.");

}
