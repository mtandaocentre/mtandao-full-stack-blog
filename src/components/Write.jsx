import { useUser } from "@clerk/clerk-react"

const Write = () => {

// Check authentication
    const {isloaded, isSignedin} = useUser()

    if(!isloaded){
        return <div>Loading...</div>

    }

    if(isloaded && !isSignedin){
        return <div>To write a post, you must be signed in.</div>

    }

    
    return (
        <div className=''>Write</div>
    )
}

export default Write