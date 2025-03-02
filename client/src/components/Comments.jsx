import axios from "axios";
import Comment from "./Comment"
import { useQuery } from "@tanstack/react-query";

const fetchComments = async (postId) => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
    return res.data;
};

const Comments = ({postId}) => {

    const { isPending, error, data } = useQuery({
        queryKey: ["comments", postId],
        queryFn: () => fetchComments(postId),
    });
  
    if (isPending) return "Loading..."
    if (error) return "Something went wrong!" + error.message

    return (
        // Initiate and style Comments mother container
        <div className='flex flex-col gap-8 lg:w-3/5'>

            {/* Add section title */}
            <h1 className="text-xl text-[#e0e0e0] underline">Comments</h1>

            {/* Create comment input area */}
            {/* Add and style button */}
            {/* Style content input area */}
            <div className="flex items-center justify-between gap-8 w-full">
                <textarea 
                    placeholder="Write a comment..." 
                    className="w-full p-4 rounded -xl" 
                />
                <button 
                    className="bg-[#a3a3a3] px-4 py-3 text-[#1b1c1c] 
                    font-medium rounded-xl"
                >
                    Send
                </button>
            </div>
            {/* Add single comment components */}
            {data.map(comment => {
                <Comment key={comment._id} comment={comment}/>
            })}
            
        </div>
    )
}

export default Comments