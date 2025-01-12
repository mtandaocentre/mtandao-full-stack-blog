import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    /* Style home page */
    <div className='mt-4 flex flex-col gap-4'>
      
      {/* BREADCRUMB */}
      {/* Create and style Breadcrumb secrion */}
      <div className="flex gap-4 text-[#e0e0e0]">
        <Link to="/" className="font-bold">Home</Link>
        <span>•</span>
        <span>Blogs and Articles</span>
      </div>

      {/* INTRODUCTION */}
      {/* Create and style introduction section */}
      <div className="flex items-centre justify-between">
        
        {/* titles */}
        {/* Create and style titles section */}
        <div>
          <h1 
            className="text-[#e0e0e0] text-2xl md:text-5xl
            lg:text-6xl font-bold"
          >
            Your Online Place for Everything Computers.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Your Online Place for Everything Computers.
          </p>
        </div>

        {/* Animated Button */}
        <div></div>
      </div>
      {/* FEATURED POSTS */}
      {/* POST LIST */}
    </div>
  )
}

export default HomePage