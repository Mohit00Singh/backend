import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try{
      const CI = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MONGODB CONNECTED !! DB HOST: ${CI.connection.host}`);
      
    }
    catch(error)
    {
        console.log("MONGODB CONNECTION ERROR MOHIT123");
        //process.exit(1)

    }
}

export default connectDB