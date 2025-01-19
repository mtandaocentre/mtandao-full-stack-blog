import express from "express"

// Create express app/server
const app = express();

// test if .env can be accessed
// console.log(process.env.test)

// Test API request
app.get("/test", (req,res) => {
    res.status(200).send("API is working")
})

// assign app port to listen to and report back
app.listen(3000, () => {
    console.log("Server is running")
});
