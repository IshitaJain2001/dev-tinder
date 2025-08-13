 import express from "express"
import connectionReq from "../controllers/reqController.js"
import { authenticate } from "../middlewares/autheticateUser.js"

 const reqRouter= express()
 reqRouter.post("/send/:status/:toUserId",authenticate, connectionReq)

 export default reqRouter