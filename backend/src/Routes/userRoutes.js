 import express from "express"
import login, { getUser, logout, signup, update } from "../controllers/userController.js"
import hash from "../middlewares/hahsingPassword.js"
import verifyPass from "../middlewares/verifyPassword.js"
import tokengenerated from "../middlewares/tokenGeneration.js"
import { authenticate } from "../middlewares/autheticateUser.js"
import checkingFields from "../middlewares/AllowedFields.js"

 const userRouter= express.Router()
 userRouter.post("/signup",hash, signup)
 userRouter.post("/login",verifyPass, tokengenerated ,login)
 userRouter.post("/getUser", authenticate, getUser)
  userRouter.post("/logout",authenticate, logout)
  userRouter.patch("/update", checkingFields   , authenticate,update )
export default userRouter
