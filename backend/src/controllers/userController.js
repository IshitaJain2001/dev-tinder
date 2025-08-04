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

 export async function logout(req,res){
    res.clearCookie("token").send("logged out successfully")
 }

 export async function update(req,res){
    const {email,password,...person}= req.body

    const user=await Users.findOne({email})
    const updatedUser=await Users.findByIdAndUpdate(user._id,{
    
       ...person
    },{
        new:true
    })
    res.send({
        "message":"updated",
        "user":updatedUser
    })
 }