import { useState } from "react"

const Navbar = () => {
  /*Create useState hook to handle the opening and closing of
  mobile menu*/
  const [open, setOpen] = useState(false);
  return (
    /* Format the Navbar container */
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        
        {/* Add logo */}
        {/* Add styling to logo */}
        {/* Add text span and style it */}
        <div className="flex items-center gap-4 text-2xl font-bold">
            <img src="/mtandao-logo.png" className="w-12 h-12" 
                alt="Mtandao Logo" 
            />
            <span>mtandao centre</span>
        </div>

        {/*MOBILE*/}
        {/*Add responsivenes for mobile screen*/}
        <div className="md:hidden">

          {/* MOBILE BUTTON */}
          {/* 
              - Create an opening and closing button for the mobile menu
              - Add onClick functionality  
          */}
          <div 
            className="cursor-pointer text-4xl" 
            onClick={()=>setOpen((prev)=>!prev)
          }>
            {open ? "X" : "=" }
          </div>

          {/* MOBILE LINK LIST */}
          {/* - Add styling to mobile link list
              - Add animation to mobile link list 
              - Add transition and speed to animation
          */}
          <div 
            className={`w-full h-screen flex flex-col 
            items-center justify-center absolute top-16
            bg-[#e0e0e0] text-[#1b1c1c] transition-all
            ease-in-out
            ${ open ? "-right-0" : "-right-[100%]"}`
          } 
          >
            Menu
          </div>

        </div>

        {/* DESKTOP */}
        {/* - Add responsivenes for desktop screens
            - Add Navbar links
        */}
        <div className="hidden md:flex gap-8 xl:gap-12 font-medium">
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button 
              className="py-2 px-4 rounded-3xl bg-[#e0e0e0] text-[#1b1c1c]"
            >
              Login
            </button>
          </a>
        </div>

    </div>
  )
}

export default Navbar