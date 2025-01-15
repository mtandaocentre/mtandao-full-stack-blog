eate import { useUser } from "@clerk/clerk-react"

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

      </form>
    </div>
  )
}

export default WritePage