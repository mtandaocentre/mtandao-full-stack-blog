import { Link } from "react-router-dom"

const MainCategories = () => {
  return (
    <div 
        /*  - Create main catogories back ground
            - Add text color and font
        */
        className='hidden md:flex bg-[#a3a3a3] rounded-3xl 
        xl:rounded-full p-4 shadow-lg items-center justify-center
        gap-8 text-[#1b1c1c] font-bold'
    >
        {/* Links */}
        <div 
            className="flex-1 flex items-center justify-between 
            flex-wrap"
        >
            {/* Created all post category */}
            <Link to="/posts" 
                className="bg-[#1b1c1c] text-[#e0e0e0] rounded-full
                px-4 py-2"
            >
                All Posts
            </Link>
        </div>
        {/* Search */}
        <div className="">Search</div>
    </div>
  )
}

export default MainCategories