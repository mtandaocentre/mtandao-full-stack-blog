import Image from "../components/Image"
import { Link } from "react-router-dom"

const SinglePostPage = () => {
  return (
    /* Style single post page container */
    <div className='flex flex-col gap-8'>
      {/* Heading */}
      <div className="flex gap 8">
        
        {/* Title and Details */}
        {/* Style title and detail container */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          
          {/* Add title */}
          <h1>
            Your online place for everything computer
          </h1>

          {/* Add details container */}
          <div className="flex items-center gap-2 text-[#e0e0e0] text-sm">
            <span>Written by</span>
            <Link>Mr. Mtandao</Link>
            <span>on</span>
            <Link>Hardware</Link>
            <span>2 days ago</span>
          </div>

        </div>

        {/* Image */}
        {/* Add and style Image component*/}
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" />
        </div>

      </div>
      {/* Content */}


    </div>
  )
}

export default SinglePostPage