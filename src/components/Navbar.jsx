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
        </div>

        {/*DESKTOP*/}
        {/*Add responsivenes for desktop screens*/}
        <div className="hidden md:flex">Desktop Screen</div>

        {/**/}
    </div>
  )
}

export default Navbar