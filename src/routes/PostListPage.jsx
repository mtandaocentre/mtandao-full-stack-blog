import PostList from "../components/PostList"

const PostListPage = () => {
  return (
    <div className=''>
      {/* Add page title */}
      <h1 className="mb-8 text-2xl">AI Blog</h1>

      {/* Create parent view */}
      <div className="flex gap-8">

        {/* Add PostList component */}
        <div className="">
          <PostList />
        </div>
      </div>

    </div>
  )
}

export default PostListPage