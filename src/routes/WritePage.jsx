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
    <div className=''>WritePage</div>
  )
}

export default WritePage