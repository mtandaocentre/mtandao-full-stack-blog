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

      </form>
    </div>
  )
}

export default WritePage