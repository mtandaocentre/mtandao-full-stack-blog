import { useUser } from "@clerk/clerk-react"

const Write = () => {

    {/* Check authentication */}
    const {isloaded, isSignedin} = useUser()

    if(!isloaded){
        return <div>Loading...</div>

    }

    if(isloaded && !isSignedin){
        return <div>To write a post, you must be signed in.</div>

    }

    
    return (
        // Create page title
        <div className=''>
            <h1>Create a New Post</h1>

            {/* Create form*/}
            <form action="">
                {/* Cover Image */}
                <button>Add cover image</button>

                {/* Article Title */}
                <input type="text" placeholder="My Tech Opinion" />

                {/* Category */}
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

export default Write