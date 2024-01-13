const express = require("express");
const app = express();
require("dotenv").config();
const port = 3000;
const connectDB = require("./db/connect");
const router = require("./routes/router");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/", router);
app.use(express.static("./public/dist"));
const run = () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
run();

