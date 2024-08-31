import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';

dotenv.config({});
connectDB()

const app = express();


const port = 3000;
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})