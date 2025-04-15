import connectDB from "./db/index.js";
import dotenv from 'dotenv';
dotenv.config();

connectDB()

.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    }) // save from server carsh
})
.catch((err) => {
    console.log("MONGO DB connection failed !!", err);
})



// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

// const app = express()

// (async () => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error", () => {
//         console.log("ERROR: ",error);
//         throw error
//        })

//        app.listen(process.env.PORT, () => {
//         console.log(`App is listening on PORT : ${process.env.PORT}`);
//        })
//     }
//     catch(error){
//         console.error("ERROR : ", error)
//         throw err
//     }
// })()