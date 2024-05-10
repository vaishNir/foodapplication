const mongoose = require("mongoose");
const cartscheme = mongoose.Schema({
  foodid: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "newfoods",
  },
  CustomerId: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  productimg: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("newcarts", cartscheme);
