import { useUser } from "@clerk/clerk-react"

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
    <div className=''>
      {/* Create page title */}
      <h1>Create a New Post</h1>

      {/* Create form */}
      <form action="">
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

      </form>
    </div>
  )
}

export default WritePage