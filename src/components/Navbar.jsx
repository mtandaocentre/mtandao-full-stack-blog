const Navbar = () => {
  return (
    <div className=''>
        
        {/* Add logo */}
        <div className="">
            <img src="/mtandao-logo.png" className="w-10 h-10" alt="Mtandao Logo" />
        </div>

        {/*Add responsivenes for mobile screen*/}
        <div className="md:hidden">Mobile Screen</div>

          {/*Add responsivenes for desktop screens*/}
          <div className="hidden md:flex">Mobile Screen</div>

        {/**/}
    </div>
  )
}

export default Navbar