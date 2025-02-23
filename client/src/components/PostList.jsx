import PostListItem from "./PostListItem"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import axios from "axios"

// Use axios to fetch post
const fetchPosts = async (pageParam) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
    params : { page: pageParam },
  });
  return res.data;
};

const PostList = () => {

  // use infinite queries to Fetch data
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam = 1 }) => fetchPosts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  })

  if (isFetching) return 'Loading...'

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