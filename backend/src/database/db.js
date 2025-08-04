 import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
 export default async  function connecttoDb(){


try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("connected to db");
    
} catch (error) {
    console.log("connection failed due to", error.message);
    
}

 }

