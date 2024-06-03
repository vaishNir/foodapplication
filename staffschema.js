const mongoose=require("mongoose")
const staffscheme=mongoose.Schema({
    staffid:{
        type:Number,
        require:true
    },
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    contactno:{
        type:Number,
        required:true
    },
    designation:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("newstaffs",staffscheme)