import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const Navbar = () => {
  /*Create useState hook to handle the opening and closing of
  mobile menu*/
  const [open, setOpen] = useState(false);
  return (
    /* Format the Navbar container */
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        
        {/* Add logo */}
        {/* - Add styling to logo  
            - Add text span and style it 
            - Source image from imagekit CDN
            - Change image source to Image component 
            - Give logo and title a link leading to home page
        */}
        <Link to="/" 
          className="flex items-center gap-4 text-2xl font-bold"
        >
            <Image 
              src="mtandao-logo.png" 
              alt="Mtandao logo" 
              w={32} 
              h={32} 
            />       
            <span>mtandao centre</span>
        </Link>

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
              - Added and styled links
          */}
          <div 
            className={`w-full h-screen flex flex-col 
            items-center justify-center gap-8 font-medium 
            text-lg absolute top-16 bg-[#e0e0e0] text-[#1b1c1c] 
            transition-all ease-in-out
            ${ open ? "-right-0" : "-right-[100%]"}`
          } 
          >
            <a href="/">Home</a>
            <a href="/">Trending</a>
            <a href="/">Most Popular</a>
            <a href="/">About</a>
            <a href="/">
              <button 
                className="py-2 px-4 rounded-3xl bg-[#1b1c1c] text-[#e0e0e0]"
              >
              Login x
              </button>
            </a>
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
              Login x
            </button>
          </a>
        </div>

    </div>
  )
}

export default Navbar