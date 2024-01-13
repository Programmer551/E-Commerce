const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide the name!"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Must Provide the price!"],
    trim: true,
  },
  detail: {
    type: String,
    required: [false],
    trim: true,
  },
  src: {
    type: String,
    required: [true, "Must Provide the image source"],
    trim: true,
  },
});
module.exports = mongoose.model("Products", schema);
