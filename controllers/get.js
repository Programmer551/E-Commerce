const products = require("../model/Schema");
// const Users = require("../model/users");
const getAllItems = async (req, res) => {
  try {
    let data = await products.find();
    res.json(data);
  } catch (error) {
    res.json({ "Error with getAllItems:": error }).status(404);
  }
};
const GetSingleItem = async (req, res) => {
  try {
    const data = await products.find({ _id: req.params.id });
    res.send({ success: true, data: data });
  } catch (error) {
    res.json({ "Error with GetSingleItem:": error }).status(404);
  }
};

module.exports = {
  getAllItems,
  GetSingleItem,
};
