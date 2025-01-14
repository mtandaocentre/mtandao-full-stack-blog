import Image from "./Image"
import { Link } from "react-router-dom"

const PostListItem = () => {
  return (
    /* - Style PostListItem container 
       - Adjusted Image and details container sizes
    */
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* Image */}
        {/* Add and style PostListItem image */}
        <div className="md:hidden xl:block xl:w-1/3">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover"/>
        </div>

        {/* Details */}
        {/* - Add title and by line
            - Add destcription and read more link 
        */}
        <div className="flex flex-col gap-4 xl:w-2/3">
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

            <p>
                Lorem Ipsum is simply dummy text of the printing and t
                ypesetting industry. Lorem Ipsum has been the industrys 
                standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a 
                type specimen book. It has survived not only five centuries, 
                but also the leap into electronic typesetting, remaining 
                essentially unchanged. It was popularised in the 1960s with 
                the release of Letraset sheets containing Lorem Ipsum 
                passages, and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <Link to="/test" 
                className="underline text-[#e0e0e0] font-bold text-sm"
            >
                Read More
            </Link>
        </div>
    </div>
  )
}

export default PostListItem