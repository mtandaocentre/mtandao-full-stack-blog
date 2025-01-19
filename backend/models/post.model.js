import { Schema } from "mongoose";
import mongoose from "mongoose";

// create post schema
const postSchema = new Schema({
        // Add user information when new post is added
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        // Title
        title: {
            type: String,
            required: true,
        },

        // Slug
        slug: {
            type: String,
            required: true,
            unique: true,
        },

        // Description
        desc: {
            type: String,
        },

        // Content
        content: {
            type: String,
            required: true,
        },

        // Check if post is featured
        isFeatured: {
            type: Boolean,
            default: false,
        },

        // New post visit number
        visit: {
            type: Number,
            default: 0
        },

    }, 

    // Updates created time
    {timestamps: true}
);

export default mongoose.model("Post", postSchema);
