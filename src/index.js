const express=require("express")
const bodyParser=require("body-parser")
const router=require("./router/route")
const mongoose= require("mongoose")
const app=express()
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://atifpervez:34BmDa5XVvtznQvO@code.8mvlc.mongodb.net/assignment1_onlineExamination",{useNewUrlParser:true})
.then(()=>{
    console.log("succesfull");
})
.catch((err)=>{
    console.log("err");
})








