import mongoose, { model, Schema } from "mongoose";
import validator from "validator";

 const userSchema= new Schema({
firstName:{
    type: String,
    required: true,
    lowercase:true
},
lastName:{
    type:String,
    lowercase:true,
    default:""
},
email:{
    type:String,
    unique:true,
    required:true,
    validate:{
        validator:validator.isEmail
    }

},
password:{
    type:String,
    required:true,
    minLength:8,
    validate:{
        validator:validator.isStrongPassword
    }
},
age:{
    type:Number,
    min:18,
    default:18
},
gender:{
    type:String,
    enum:["male","female","prefer not to say"],
    default:"male"

}

 },{
    timestamps:true
 })

const Users = mongoose.model("Users", userSchema);
export {Users } ;