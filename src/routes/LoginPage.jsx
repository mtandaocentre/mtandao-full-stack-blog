import { SignIn } from "@clerk/clerk-react"

// Add clerk signIn component and style it
const LoginPage = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignIn />
    </div>
  )
}

export default LoginPage