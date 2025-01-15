import Search from "./Search"

const SideMenu = () => {
  return (
    // Make menu sticky during scroll
    <div className='px-4 h-max sticky top-8'>
        
        {/* Create side menu sections titles */}
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        {/* Add Search component */}
        <Search />

        <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
        <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
    </div>
  )
}

export default SideMenu