const express=require("express")
const router=express.Router()
const adminController=require("../controller/adminController")

router.post("/createAdmin",adminController.createAdmin)

module.exports=router


