import express from "express"
import userRoute from "./routes/user.route.js"
import postRoute from "./routes/post.route.js"

// Create express app/server
const app = express();

// test if .env can be accessed
// console.log(process.env.test)

// Test API request
// app.get("/test", (req,res) => {
//     res.status(200).send("API is working")
// })

// Use user router to get api
app.use("/users", userRoute);
// Use post router to get api
app.use("/posts", postRoute);

// assign app port to listen to and report back
app.listen(3000, () => {
    console.log("Server is running")
});
