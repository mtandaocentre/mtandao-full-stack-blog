import { Schema } from "mongoose"
import mongoose from "mongoose"

// Create user Schema
const userSchema = new Schema({
        // username
        username: {
            type: String,
            required: true,
            unique: true,
        },

        // email
        email: {
            type: String,
            required: true,
            unique: true,
        },

        // Image
        img: {
            type: String,
        },

        // Saved Posts
        svedPosts: {
            type: [String],
            default: []
        }
    }, 

    // Updates created @ time
    { timestamps: true }
);

export default mongoose.model("User", userSchema);