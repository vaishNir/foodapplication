const mongoose = require("mongoose")
const stafforderscheme = mongoose.Schema({
    customername:{
        type:String,
        required:true,
    },
    foodid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"newfoods",
    },
    staffid:{
        type:mongoose.Schema.Types.ObjectId,
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

module.exports=mongoose.model("newstafforders",stafforderscheme)