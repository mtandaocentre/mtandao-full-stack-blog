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

          {/* - Add details container
              - Style details links 
          */}
          <div className="flex items-center gap-2 text-[#e0e0e0] text-sm">
            <span>Written by</span>
            <Link className="text-[#e0e0e0] font-semibold">Mr. Mtandao</Link>
            <span>on</span>
            <Link className="text-[#e0e0e0] font-semibold">Hardware</Link>
            <span>2 days ago</span>
          </div>

          {/* Add and style description */}
          <p className="text-[#e0e0e0] font-medium">
          Lorem Ipsum is simply dummy text of the printing and 
          typesetting industry. Lorem Ipsum has been the industrys 
          standard dummy text ever since the 1500s, when an unknown 
          printer took a galley of type and scrambled it to make a 
          type specimen book. It has survived not only five centuries, 
          but also the leap into electronic typesetting, remaining 
          essentially unchanged. It was popularised in the 1960s with 
          the release of Letraset sheets containing Lorem Ipsum 
          passages, and more recently with desktop publishing software 
          like Aldus PageMaker including versions of Lorem Ipsum.
          </p>

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