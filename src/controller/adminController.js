const adminModel=require("../model/adminModel")


const createAdmin=async(req,res)=>{
let data=req.body
const {name,email,password}=data
if(!Object.keys(data).length){
    return res.status(400).send({status:false,msg:"no data found"})
}
if(!name){
    return res.status(400).send({status:false,msg:"please enter your name"})
}
if(!email){
    return res.status(400).send({status:false,msg:"please enter your email ID"})
    
}
if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
return res.status(400).send({ status: false, message: "Email should be valid" });
}
let checkEmail=await adminModel.findOne({email:email})
if(checkEmail){
    return res.status(400).send({status:false,msg:"email ID is already exist"})
    
}

if(!password){
    return res.status(400).send({status:false,message:"please enter your password "})
}
if(password.length>=7){
    return res.status(400).send({staus:false,msg:"password must be only of 6 digits"})
}
let checkPassword=await adminModel.findOne({password:password})
if(checkPassword){
    return res.status(400).send({status:false,msg:"password is already exist"})
    
}
let createsAdmin=await adminModel.create(data)
return res.status(201).send({status:true ,message:"User created successfully", data:createsAdmin})
}

module.exports={createAdmin}




