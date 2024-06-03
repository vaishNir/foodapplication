const mongoose = require("mongoose");
const cartscheme = mongoose.Schema({
  foodid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "newfoods",
  },
  CustomerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "newusers"
  },
  count: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("newcarts", cartscheme);
