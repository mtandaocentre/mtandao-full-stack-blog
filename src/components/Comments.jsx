const Comments = () => {
  return (
    // Initiate and style Comments mother container
    <div className='flex flex-col gap-8 lg:w-3/5'>

        {/* Add section title */}
        <h1 className="text-xl text-[#e0e0e0] underline">Comments</h1>

        {/* Create comment input area */}
        <div className="">
            <textarea placeholder="Write a comment..." name="" id="" />
        </div>
    </div>
  )
}

export default Comments