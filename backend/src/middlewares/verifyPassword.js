 import bcrypt from "bcrypt"
import { Users } from "../models/userModel.js"

 export default async function verifyPass(req,res,next){
    const {email,password}= req.body
 try {
     const user=  await Users.findOne({email})
     if(!user){
       res.send("invalid credentials")
     }
     else{
     const isVerified=   await bcrypt.compare(password, user.password)
     if(!isVerified){
       res.send("invalid credentials")
     }
     else{
        req.body.id= user._id
       next()
     }
     }
 } catch (error) {
   res.send("some internal server error") 
 }
 }
