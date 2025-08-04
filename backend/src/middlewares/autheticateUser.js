 import jwt from "jsonwebtoken"
import { Users } from "../models/userModel.js"

 export const authenticate=async (req,res,next)=>{
try {
    const {token}= req.cookies
    const {email}= req.body
    if(!token){
        res.send("please login to proceed")
    }
    else{
       let decoded=await jwt.verify(token, process.env.SECRET_KEY)
       console.log(decoded.id);
       let user=await Users.findById(decoded.id)
       req.body.user= user
       next()
    }
} catch (error) {
    console.log(error);
    
}




 }
