import { Users } from "../models/userModel.js"



export default async function login(req,res){
    const {token}= req.body
res.cookie("token",token).send("loggedin successfully")
 }

 export async function signup(req,res){
const {firstName,lastName,age,email,password,gender}= req.body
const user= await new Users({
    firstName,
    email,
    password,
    gender,
    lastName,
    age,

})
await user.save()
res.send({
    "message":"user created",
    "user":user,
    
})
 }


 export async function getUser(req,res){
    let {user}= req.body
res.send({
    "message":"authenticated",
    "user": user
})
 }