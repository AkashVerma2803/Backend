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
export default app;