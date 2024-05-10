const mongoose=require("mongoose")
const userscheme=mongoose.Schema({
    fname:{

        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    dob:{

        type:Date,
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
    contactno:{

        type:Number,
        required:true
    }
})
module.exports=mongoose.model("newusers",userscheme)


