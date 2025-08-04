 import bcrypt from "bcrypt"

 export default async function hash(req,res,next){
 const hashedPass=  await  bcrypt.hash(req.body.password,10)
 req.body.password= hashedPass
 next()
}