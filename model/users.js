const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must Provide the name!"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Must Provide the Password!"],
    trim: true,
  },
  id: {
    required: [false],
    type: Array,
  },
  Purchase: {
    required: [false],
    type: Array,
  },
});
module.exports = mongoose.model("Users", schema);
