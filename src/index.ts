import express, { Application } from "express";

const app: Application=express();

const port:Number= 8080

app.listen(port,()=>{
    console.log("server started");
    
})