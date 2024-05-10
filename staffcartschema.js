const mongoose=require("mongoose")
const staffcartscheme=mongoose.Schema({
    foodid:{
        type:String,
        required:true,
        ref:"newfoods",
    },
    staffid:{
        type:String,
        required:true,
        ref:"newstaffs",
    },
    count:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
    }
})

module.exports=mongoose.model("newstaffcarts",staffcartscheme)

// type:mongoose.Schema.Types.ObjectId,
