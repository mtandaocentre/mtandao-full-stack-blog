const Navbar = () => {
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

        {/*Add responsivenes for mobile screen*/}
        <div className="md:hidden">Mobile Screen</div>

          {/*Add responsivenes for desktop screens*/}
          <div className="hidden md:flex">Desktop Screen</div>

        {/**/}
    </div>
  )
}

export default Navbar