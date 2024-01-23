import express from "express";
// import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 8088;

app.get("/",(req,res) =>{
    res.status(200).send("welcome to libraryapp");
});

app.listen(port,()=>{
    console.log(`server is running in port ${port}`);
});