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

const ConnectionModel= new model("Requests",reqSchema)
export default ConnectionModel