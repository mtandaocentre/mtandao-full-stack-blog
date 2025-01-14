import Image from "./Image"
import { Link } from "react-router-dom"

const PostListItem = () => {
  return (
    /* Style PostListItem container */
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* Image */}
        {/* Add and style PostListItem image */}
        <div className="md:hidden xl:block">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover"/>
        </div>

        {/* Details */}
        {/* - Add title and by line */}
        <div className="flex flex-col gap-4">
            <Link to="/test" className="text-4xl font-semibold">
                Your online place for everything Computers
            </Link>
            <div className="flex items-center gap-2 text-[#e0e0e0]">
                <span>Written by</span>
                <Link className="text-[#e0e0e0] font-bold">Mr. Mtandao</Link>
                <span>on</span>
                <Link className="text-[#e0e0e0] font-bold">Hardware</Link>
                <span>2 days ago</span>
            </div>
        </div>
    </div>
  )
}

export default PostListItem