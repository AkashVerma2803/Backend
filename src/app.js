import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))
//urlencoded is used to indicate that, when we see some url there is + %
app.use(express.urlencoded({extended:true,limit:"16kb"}))
//it is used tp place any image video favicon and all
//make a public folder and than add 
//app.use(express.static('public'))

app.use(cookieParser());


//routes import 
import  userRouter from'./routes/user.routes.js'

//route declaration 
//this function points to user.routes.controller.js file 
app.use("/api/v1/users" ,userRouter )

//http://localhost:8000/api/v1/users/reigster
//http://localhost:8000/api/v1/users/login
export {app} ;