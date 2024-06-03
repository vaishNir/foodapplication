const mongoose = require("mongoose");

const staffOrderSchema = new mongoose.Schema({
    customername: {
        type: String,
        required: true,
    },
    foodid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "newfoods",
    },
    staffid: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "newstaffs",
    },
    count: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, // Set a default value for the date
    }
});

module.exports = mongoose.model("newstafforders", staffOrderSchema);