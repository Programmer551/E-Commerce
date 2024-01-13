const products = require("../model/Schema");
const Users = require("../model/users");
const bcrypt = require("bcrypt");
const deleteAllItems = async (req, res) => {
  try {
    await products.deleteMany({ __v: 0 });
    res.send({ success: true });
  } catch (error) {
    res.json({ "Error with deleteAllItems:": error }).status(404);
  }
};
const deleteAllCart = async (req, res) => {
  try {
    const { user } = req.body;
    const person = await Users.findOne({
      name: user.name,
      password: user.password,
    });
    if (person) {
      await Users.findByIdAndUpdate(person, { id: [] });
      res.send({ success: true });
      return;
    }
    res.send("Person is not Avaible");
  } catch (error) {
    res.json({ "Error with deleteAllCart:": error }).status(404);
  }
};
const deleteSingleItem = async (req, res) => {
  try {
    await products.deleteOne({ _id: req.body.id });
    res.send({ success: true });
  } catch (error) {
    res.json({ "Error with deleteSingleItem:": error }).status(404);
  }
};
const deleteSingleCart = async (req, res) => {
  try {
    const { user, id } = req.body;

    const person = await Users.findOne({
      name: user.name,
    });

    if (person) {
      const compare = bcrypt.compare(user.password, person.password);

      if (compare) {
        const updatedIds = person.id.filter((personId) => personId != id);
        await Users.findByIdAndUpdate(person._id, { $set: { id: updatedIds } });
        res.send({ success: true });
        return;
      }
    }
    res.send("Person is not Avaible").status(404);
  } catch (error) {
    res.send({ "Error with deleteSingleCart:": error }).status(404);
  }
};
module.exports = {
  deleteAllItems,
  deleteSingleItem,
  deleteSingleCart,
  deleteAllCart,
};
