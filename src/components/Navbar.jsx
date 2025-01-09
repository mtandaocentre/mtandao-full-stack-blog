const Navbar = () => {
  return (
    /* Format the Navbar container */
    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        
        {/* Add logo */}
        <div className="">
            <img src="/mtandao-logo.png" className="w-10 h-10" alt="Mtandao Logo" />
        </div>

        {/*Add responsivenes for mobile screen*/}
        <div className="md:hidden">Mobile Screen</div>

          {/*Add responsivenes for desktop screens*/}
          <div className="hidden md:flex">Desktop Screen</div>

        {/**/}
    </div>
  )
}

export default Navbar