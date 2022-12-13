const express=require("express")
const bodyParser=require("body-parser")
const router=require("./userRouter/userRouter")
const mongoose= require("mongoose")
const app=express()
app.use(bodyParser.json())
mongoose.connect("mongodb+srv://atifpervez:34BmDa5XVvtznQvO@code.8mvlc.mongodb.net/assignment1")
.then(()=>{
    console.log("succesfull");
})
.catch(err=>{
    console.log("err");
})

app.use("/", router)


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});











