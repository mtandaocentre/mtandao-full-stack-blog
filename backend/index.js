import express from "express"
import connectDB from "./lib/connectDB.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webhookRouter from "./routes/webhook.route.js"
import { clerkMiddleware } from "@clerk/express"


// Create express app/server
const app = express();

// Use clerkMiddleWare
app.use(clerkMiddleware());

// Use webhook end point to call webhook router
app.use("/webhooks", webhookRouter);

// Allow express to send json
app.use(express.json()); 

// test if .env can be accessed
// console.log(process.env.test)

// Test API request
// app.get("/test", (req,res) => {
//     res.status(200).send("API is working")
// })

// test auth-state end point
app.get("/auth-state", (req, res) => {
    
    const authState = req.auth;
    res.json(authState); 

});

// Use user router to get api
app.use("/users", userRouter);

// Use post router to get api
app.use("/posts", postRouter);

// Use post router to get api
app.use("/comments", commentRouter);

// Create end point error handler
app.use((error, req, res, next) => {

    res.status( error.status || 500 );

    res.json({
        message: error.message || "Something went wrong!",
        status: error.status,
        stack: error.stack
    });

});

// assign app port to listen to and report back
app.listen(3000, () => {
    connectDB()
    console.log("Server is running")
});
