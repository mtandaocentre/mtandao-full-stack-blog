import Search from "./Search"
import { Link } from "react-router-dom"

const SideMenu = () => {
  return (
    // Make menu sticky during scroll
    <div className='px-4 h-max sticky top-8'>
        
        {/* Create side menu sections titles */}
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        {/* Add Search component */}
        <Search />

        <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>

        {/* Categories */}
        <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
        {/* Add categories container  */}
        <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/posts">All</Link>
            <Link className="underline" to="/posts?cat=ai">AI</Link>
            <Link className="underline" to="/posts?cat=cloud">Cloud</Link>
            <Link className="underline" to="/posts?cat=data">Data</Link>
            <Link className="underline" to="/posts?cat=hardware">Hardware</Link>
            <Link className="underline" to="/posts?cat=iot">IoT</Link>
            <Link className="underline" to="/posts?cat=security">Security</Link>
            <Link className="underline" to="/posts?cat=software">Software</Link>
            <Link className="underline" to="/posts?cat=web2">Web2</Link>
            <Link className="underline" to="/posts?cat=web3">Web3</Link>

        </div>
    </div>
  )
}

export default SideMenu