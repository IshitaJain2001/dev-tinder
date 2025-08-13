import ConnectionModel from "../models/connectionReq.js"
import { Users } from "../models/userModel.js"

  export default async function connectionReq(req,res){
    const {user}= req.body
    const {status,toUserId} = req.params
    const fromUserId= user._id
let allowedStatusTypes= ["interested", "ignored"]

if(!allowedStatusTypes.includes(status)){
return res.json({
  "message":"invalid status type " + status
})
}

const toUser=await Users.findById(toUserId)
if(!toUser) {
  return res.json({"message":"no such user exists"})}
  const isAlreadySent=   await ConnectionModel.findOne({
    $or:[
      {fromUserId, toUserId},
      {fromUserId:toUserId, toUserId:fromUserId}
    ]
  })
  console.log(isAlreadySent);

  if(isAlreadySent){
    return res.json({
      "message":"invalid connection req"
    })
  }
 
  try {
    
  const connectionRequest= new ConnectionModel({fromUserId,toUserId,status})
  const data=     await connectionRequest.save()
 
      res.send({
          "message":`${status} req to ${toUserId} by ${fromUserId}`,
  "data": data
      })
    

    
    
  } catch (error) {
   res.send(error.message) 
  }
  }