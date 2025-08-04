 import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()
export default async function tokengenerated(req,res,next){
   
    
    const {id}= req.body
     console.log(id,process.env.SECRET_KEY);
const token=   await jwt.sign({id}, process.env.SECRET_KEY,{
    expiresIn:"1d"
})
req.body.token= token
next()
 }