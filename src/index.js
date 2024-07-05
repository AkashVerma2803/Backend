//require('dotenv').config()
import dotenv from "dotenv"; 
import connectDB from './database/index.js';

dotenv.config({
    path: './env'
})

connectDB();

/*
//Used try & catch and used async and await if DB is in different continent 
import express from 'express'
const app = express();

(async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/
            ${DB_NAME}`)
        app.on("error",(error) =>{
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("ERROR: " ,error);
        throw error 
    }
})()
*/