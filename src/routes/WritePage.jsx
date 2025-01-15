import { useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";

const WritePage = () => {

  // Check is user is authenticated
  const {isLoaded, isSignedIn} =useUser()

  if(!isLoaded){
    return <div className="">Loading...</div>
  }

  if(isLoaded && !isSignedIn){
    return <div className="">SignIn to Access this page.</div>
  }

  return (
    // Style root container
    <div 
      className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex
      flex-col gap-6'
    >
      {/* Create page title */}
      {/* Style page title */}
      <h1 className="text-xl font-light">Create a New Post</h1>

      {/* Create form */}
      {/* Style form container */}
      <form action="flex flex-col gap-6">
        {/* Add button for adding cover image */}
        <button>Add a cover image</button>

        {/* Add title */}
        <input type="text" placeholder="My Tech Idea/Story" />

        {/* Create choose category section */}
        <div className="">
          <label htmlFor="">Choose a category:</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="ai">AI</option>
            <option value="cloud">Cloud</option>
            <option value="data">Data</option>
            <option value="hardware">Hardware</option>
            <option value="iot">IoT</option>
            <option value="security">Security</option>
            <option value="software">Software</option>
            <option value="web2">Web2</option>
            <option value="web3">Web3</option>
          </select>
        </div>

        {/* Add description text area */}
        <textarea name="desc" placeholder="Add a short description" />

        {/* Use react Quill to create write page content text area */}
        <ReactQuill theme="snow"/>

        {/* Add send button */}
        <button>Send</button>
      </form>
    </div>
  )
}

export default WritePage