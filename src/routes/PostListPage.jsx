import PostList from "../components/PostList"
import SideMenu from "../components/SideMenu"

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

        {/* Add SideMenu Component */}
        <div className="">
          <SideMenu />
        </div>
      </div>

    </div>
  )
}

export default PostListPage