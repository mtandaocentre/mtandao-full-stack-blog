import PostListItem from "./PostListItem"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const PostList = () => {

  // Use axios to fetch post
  const fetchPosts = async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
    return res.data;
  };

  // Fetch data
  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () => fetchPosts(),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  console.log(data)

  return (
    /* - Style post list container 
       - Add more post list items to post list
    */
    <div className='flex flex-col gap-12 mb-8'>
        {/* Add PostListItem component to PostList */}
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
    </div>
  )
}

export default PostList