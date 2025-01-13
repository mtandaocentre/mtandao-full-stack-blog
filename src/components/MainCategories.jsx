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
        <div className="">Links</div>
        {/* Search */}
        <div className="">Search</div>
    </div>
  )
}

export default MainCategories