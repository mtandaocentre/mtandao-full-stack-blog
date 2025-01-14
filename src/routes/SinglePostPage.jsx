import Image from "../components/Image"
const SinglePostPage = () => {
  return (
    /* Style single post page container */
    <div className='flex flex-col gap-8'>
      {/* Heading */}
      <div>
        <div className=""></div>

        {/* Image */}
        {/* Add amd style Image component*/}
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" />
        </div>

      </div>
      {/* Content */}


    </div>
  )
}

export default SinglePostPage