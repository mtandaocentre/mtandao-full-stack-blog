import Image from "./Image"

const Comment = () => {
  return (
    // Style Comment root container
    <div 
      className='p-4 bg-[#a3a3a3] rounded-xl mb-8 text-[#1b1c1c]'
    >
      {/* Create and style user information */}
      <div className="flex items-center gap-4">
        <Image 
          src="userImg.png"
          className="w-10 h-10 rounded-full object-cover" w="40"/>
          <span className="font-medium">Mr. Mtandao</span>
          <span className="text-sm text-[#1b1c1c]">2 days ago</span>
      </div>
    </div>
  )
}

export default Comment