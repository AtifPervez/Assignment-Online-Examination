const mongoose = require("mongoose")
const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
},
    {timestamps:true}

)
module.exports=mongoose.model("Admin",adminSchema)