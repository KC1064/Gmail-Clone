import mongoose, { mongo } from "mongoose";

const emailSchema = new mongoose.Schema({
    to:{
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
},{timestamps});

export const email = mongoose.model("Email",emailSchema);
