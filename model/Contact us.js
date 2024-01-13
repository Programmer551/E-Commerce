const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide the name!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Must Provide the password!"],
    trim: true,
  },
  message: {
    type: String,
    required: [true, "Must Provide the password!"],
    trim: true,
  },
});
module.exports = mongoose.model("Contact", schema);
