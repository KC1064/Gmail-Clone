import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import userRoute from './routes/user.route.js'

dotenv.config({});
connectDB();
const port = 3000;
const app = express();

//Middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption = {
    origin: ['http://localhost:5173'],
    credentials:true
}
app.use(cors(corsOption));

//Routes
app.use("api/v1/user",userRoute);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})