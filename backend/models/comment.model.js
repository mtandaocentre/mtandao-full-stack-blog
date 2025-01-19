import { Schema } from "mongoose";
import mongoose from "mongoose";

// Create comment schema
const commentSchema = new Schema({
    // Description    
    desc: {
            type: String,
            required: true,
        },
    }, 

    // Updates created time
    {timestamps: true}
);

export default mongoose.model("Comment", commentSchema);