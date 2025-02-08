import { useAuth, useUser } from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new";
import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { useState } from "react";

const WritePage = () => {

  // Check is user is authenticated
  const {isLoaded, isSignedIn} =useUser();

  // Create use state for geting content
  const [value, setValue] = useState("");

  // Get token 
  const { getToken } = useAuth();

  // Mutate data using useMutation
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token = await getToken();
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, newPost, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  })

  if(!isLoaded){
    return <div className="">Loading...</div>
  }

  if(isLoaded && !isSignedIn){
    return <div className="">SignIn to Access this page.</div>
  }

  // handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value,
    };

    console.log(data);

    mutation.mutate(data);

  };

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
      {/* Change actions to classname */}
      {/* Fetch data from form  */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 flex-1 mb-6">
        {/* Add button for adding cover image */}
        {/* Style button */}
        <button 
          className="w-max p-2 shadow-md rounded-xl text-sm text-[#1b1c1c]
          bg-[#a3a3a3]"
        >
          Add a cover image
        </button>

        {/* Add title */}
        <input 
          className="text-4xl font-semibold bg-transparent 
          outline-none" 
          type="text" 
          placeholder="My Tech Idea/Story" 
          name="title"
        />

        {/* Create choose category section */}
        {/* Style choose category section */}
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">Choose a category:</label>
          <select 
            name="category" 
            id="" 
            className="p-2 rounded-xl bg-[#a3a3a3] text-[#1b1c1c] 
            shadow-md"
          >
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
        {/* Style description text area */}
        <textarea 
          name="desc" 
          placeholder="Add a short description"
          className="p-4 rounded-xl bg-[#e0e0e0] text-[#1b1c1c] shadow-md" 
        />

        {/* Use react Quill to create write page content text area */}
        {/* Style quill */}
        <ReactQuill 
          theme="snow" 
          className="flex-1 rounded-xl bg-[#e0e0e0] text-[#1b1c1c] shadow-md"
          value={value} 
          onChange={setValue}
        />

        {/* Add send button */}
        {/* Style send button */}
        <button 
          className="text-[#1b1c1c] bg-[#a3a3a3] font-medium
          rounded-xl mt-4 p-2 w-36"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default WritePage