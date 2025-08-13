 import express from "express"
import connectionReq, { reviewReq } from "../controllers/reqController.js"
import { authenticate } from "../middlewares/autheticateUser.js"

 const reqRouter= express()
 reqRouter.post("/send/:status/:toUserId",authenticate, connectionReq)
 reqRouter.post("/review/:status/:requestId",authenticate, reviewReq)
 export default reqRouter