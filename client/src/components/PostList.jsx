import PostListItem from "./PostListItem"

const PostList = () => {
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