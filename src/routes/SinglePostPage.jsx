import Image from "../components/Image"
import { Link } from "react-router-dom"

const SinglePostPage = () => {
  return (
    /* Style single post page container */
    <div className='flex flex-col gap-8'>
      {/* Heading */}
      <div className="flex gap-8">
        
        {/* Title and Details */}
        {/* Style title and detail container */}
        <div className="lg:w-3/5 flex flex-col gap-8">
          
          {/* - Add title
              - Style title 
          */}
          <h1 
            className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold"
          >
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

          {/* - Add and style description 
              - made description short */}
          <p className="text-[#e0e0e0] font-medium">
            Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industrys 
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book. 
          </p>

        </div>

        {/* Image */}
        {/* - Add and style Image component
            - Add width and rounding to image
        */}
        <div className="hidden lg:block w-2/5">
          <Image 
            src="postImg.jpeg" 
            w="600" 
            className="rounded-2xl" 
          />
        </div>

      </div>

      {/* Content */}
      {/* Style content container */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Text */}
        {/* Add and style content text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>  
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
          <p>  
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
          <p>  
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

        {/* Menu */}
        {/* Add and style menu container */}
        <div className="px-4 h-max sticky top-8">
          {/* Add Author title */}
          <h1>Author</h1>

          {/* Add and style image */}
          <div className="">
            <Image 
              src="userImg.png" 
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
          </div>
        </div>

      </div>

    </div>
  )
}

export default SinglePostPage