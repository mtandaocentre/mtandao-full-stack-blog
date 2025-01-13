import Image from "./Image"
import { Link } from "react-router-dom"

const FeaturedPosts = () => {
  return (
    /* Add responsiveness */
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        {/* Divide featured post into two sections */}
        
        {/* Fisrt post */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
        
        {/* Image */}
        {/* Add and style image component */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />

        {/* Details */}
        {/* Add and style detail section */}
        <div className="flex items-center gap-4">
            <h1 className="font-bold lg:text-lg">01.</h1>
            <Link className=" font-semibold text-[#e0e0e0] lg:text-lg">Hardware</Link>
            <span className="text-[#e0e0e0] font-medium">2 days ago</span>
        </div>

        {/* Title */}
        </div>

        {/* Other posts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4"></div>

    </div>
  )
}

export default FeaturedPosts