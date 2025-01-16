// Import Express
import express from "express"

// Create express application
const app = express()

// Create a test api request
app.get("/test",(req,res)=>{
    res.status(200).send("It works")
})

// test .env access 
console.log(process.env.testkey)

// Create port to listen
app.listen(3000,()=>{
    console.log("Server is running")
})