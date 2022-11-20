//const { all } = require("../routes/products");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
  id: Number,
  title: String,
  desc: String,
  price: Number,
  color: String,
  size: String,
  quantity: String,
  src: String,
});

module.exports = mongoose.model("product", product);
