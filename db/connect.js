const mongoose = require("mongoose");
const ConnectDB = (url) => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("DB is connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = ConnectDB;
