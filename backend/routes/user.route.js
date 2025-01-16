import express from "express"

// Define router
const router = express.Router()

// Test router
router.get("/anothertest",(req,res)=>{
    res.status(200).send("user route")
})

// Export router
export default router