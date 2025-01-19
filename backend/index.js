import express from "express"

// Create express app/server
const app = express();

// assign app port to listen to and report back
app.listen(3000, () => {
    console.log("Server is running")
});
