import app from "./index.js"
import mongoose from "mongoose";
const dbConnection=async()=>{
    try {
        await mongoose.connect(
          "mongodb+srv://sanidhya02neema:Sani1408@cluster0.w8vkc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("db Connected")
    } catch (error) {
        console.log(error)
    }

}
export default dbConnection;