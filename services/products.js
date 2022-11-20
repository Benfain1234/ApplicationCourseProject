const proDB = require("../models/products");
const mongoose = require("mongoose");
const { collection } = require("../models/products");
const { json } = require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/products");

const products = [
  {
    id: 1,
    title: "dress",
    desc: "shirt",
    price: "100",
    color: "black",
    size: "M",
    size_value: "3",
    quantity: "0",
    src: "img/product-1.jpg",
  },
  {
    id: 2,
    title: "jacket",
    desc: "dress",
    price: "101",
    color: "white",
    size: "S",
    size_value: "2",
    quantity: "0",
    src: "img/product-2.jpg",
  },
  {
    id: 3,
    title: "hat",
    desc: "t",
    price: "200",
    color: "red",
    size: "L",
    size_value: "4",
    quantity: "0",
    src: "img/product-3.jpg",
  },
  {
    id: 4,
    title: "dress",
    desc: "shoes",
    price: "450",
    color: "blue",
    size: "XL",
    size_value: "5",
    quantity: "0",
    src: "img/product-4.jpg",
  },
  {
    id: 5,
    title: "shirt",
    desc: "pants",
    price: "220",
    color: "green",
    size: "L",
    size_value: "4",
    quantity: "0",
    src: "img/product-5.jpg",
  },
  {
    id: 6,
    title: "suit",
    desc: "underwear",
    price: "32",
    color: "blue",
    size: "M",
    size_value: "3",
    quantity: "0",
    src: "img/product-6.jpg",
  },
  {
    id: 7,
    title: "coat",
    desc: "sunglasses",
    price: "262",
    color: "black",
    size: "S",
    size_value: "2",
    quantity: "0",
    src: "img/product-7.jpg",
  },
  {
    id: 8,
    title: "shirt",
    desc: "scarf",
    price: "124",
    color: "white",
    size: "XS",
    size_value: "1",
    quantity: "0",
    src: "img/product-8.jpg",
  },
];
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

async function getAllProducts() {
  const v = await proDB.find().then((data) => {
    return data;
  });
  return v;
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
  getAllProducts,
  findProduct,
  addProduct,
  removeProduct,
};
