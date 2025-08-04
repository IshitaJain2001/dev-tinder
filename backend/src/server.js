 import express from "express"
 import cors from "cors"
import dotenv from "dotenv"
import connecttoDb from "./database/db.js"
import userRouter from "./Routes/userRoutes.js"
import cookieParse from "cookie-parser"
dotenv.config()
 const app= express()
 app.use(express.json())
 app.use(cookieParse())
 app.use(cors())
 
 app.use("/users", userRouter)
connecttoDb()
 app.listen(process.env.PORT)