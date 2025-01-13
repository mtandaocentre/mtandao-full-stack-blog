import Image from "./Image"

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
        {/* Title */}
        </div>

        {/* Other posts */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4"></div>

    </div>
  )
}

export default FeaturedPosts