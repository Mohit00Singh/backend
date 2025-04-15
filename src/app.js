import express from "express";
import cookieParser from "cookie-parser";   // CRUD operation on cookies
import cors from "cors";

const app = express()


// for middleware and configuration

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "5mb"}))   // for the info of  form
app.use(express.urlencoded({extended: true, limit: "5mb"}))  // url info
app.use(express.static("public"))   // for files this is a public asset to save files
app.use(cookieParser())


export default app