import PostListItem from "./PostListItem"

const PostList = () => {
  return (
    /* Style post list container */
    <div className='flex flex-col gap-12 mb-8'>
        {/* Add PostListItem component to PostList */}
        <PostListItem />
    </div>
  )
}

export default PostList