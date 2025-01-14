import Image from "./Image"

const PostListItem = () => {
  return (
    /* Style PostListItem container */
    <div className='flex flex-col xl:flex-row gap-8'>
        {/* Image */}
        {/* Add and style PostListItem image */}
        <div className="md:hidden xl:block">
            <Image src="postImg.jpeg" className="rounded-2xl object-cover"/>
        </div>
    </div>
  )
}

export default PostListItem