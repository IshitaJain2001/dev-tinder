 import mongoose, { model } from "mongoose"

 const reqSchema= new mongoose.Schema({
    fromUserId:{
        type: mongoose.Schema.Types.ObjectId,
required:true
    },
    toUserId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    status:{
        type:String,
        enum:{
            
        values:    ["accepted", "rejected", "interested", "ignore"],
    message: `{VALUE} IS INCORRECT STATUS TYPE`
    },
    required:true
    }
 },{
    timestamps:true
 })

 reqSchema.index({fromUserId:1, toUserId:2})

 reqSchema.pre("save", function (next){
    let connectReq= this;
    if(connectReq.fromUserId.equals(connectReq.toUserId)){
        throw new Error("sending req to yourself isnot allowed")
    }
    next()
 })
const ConnectionModel= new model("Requests",reqSchema)
export default ConnectionModel