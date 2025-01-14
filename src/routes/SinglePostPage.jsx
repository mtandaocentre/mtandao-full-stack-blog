import Image from "../components/Image"
const SinglePostPage = () => {
  return (
    /* Style single post page container */
    <div className='flex flex-col gap-8'>
      {/* Heading */}
      <div>
        {/* Title and Details */}
        {/* Style title and detail container */}
        <div className="lg:w-3/5 flex flex-col gap-8">

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