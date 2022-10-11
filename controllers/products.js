const productsModel = require("../models/products");
const cart = require("../models/cart");

function index(req, res) {
  res.render("index.ejs", {
    products: productsModel.getAllProducts(),
    cart: cart.getCart(),
  });
}

module.exports = { index };
