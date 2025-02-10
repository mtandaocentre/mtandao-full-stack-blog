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

    console.log(req.headers);

    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }

    const user = await User.findOne({ clerkUserId });

    if (!user) {
        return res.status(404).json("User not found!");
    }
    
    // generate slug
    let slug = req.body.title.replace(/ /g, "-").toLowerCase();

    // check if post exist
    let existingPost = await Post.findOne({ slug });

    // add counter 
    let counter = 2;

    // Create counter loop
    while (existingPost) {
        slug = `${slug}-${counter}`;
        existingPost = await Post.findOne({ slug });
        counter++;
    }

    // Create post
    const newPost = new Post({ user: user._id, slug, ...req.body });
   
    const post = await newPost.save();
    res.status(200).json(post);

}

// Declare and export deletePost to delete a post
export const deletePost = async (req, res) => {
   
    // Check for clerkUserId before creating post
    const clerkUserId = req.auth.userId;
 
    if (!clerkUserId) {
        return res.status(401).json("Not authenticated!");
    }
 
    const user = await User.findOne({ clerkUserId });

    const deletedPost = await Post.findOneAndDelete({
        _id: req.params.id,
        user: user._id,
    });

    if (!deletedPost) {
        return res.status(403).json("You can delete only your posts!");
    }
    
    res.status(200).json("Post has been deleted");

}
