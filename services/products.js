const proDB = require("../models/products");
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/products");

function addProduct(title, desc, price, color, size, quantity, src) {
  proDB
    .find()
    .sort({ id: -1 })
    .limit(1)
    .then((data) => {
      const id = data[0].id + 1;
      const prod = new proDB({
        id: id,
        title: title,
        desc: desc,
        price: price,
        color: color,
        size: size,
        quantity: quantity,
        src: src,
      });
      return prod.save();
    });
}



function removeProduct(id) {
  proDB.findOneAndRemove({ id: id }).then((data) => {
    return data;
  });
}

async function findProduct(id) {
  const p = await proDB.findOne({ id: id });
  return p;
}

module.exports = {
  findProduct,
  addProduct,
  removeProduct,
};
