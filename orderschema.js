const mongoose = require("mongoose")
const orderscheme = mongoose.Schema({
    foodid:{
        type:String,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        type:String,
        ref:"newusers",

    },
    paymentstatus:{
        type:Boolean,
    },
    amount:{
        type:Number,
    },
    count:{
        type:Number,
    },
    date:{
        type:String,
    }
})

module.exports=mongoose.model("neworders",orderscheme)