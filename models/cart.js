const products = require("./products");
const cart = [];

function getCart() {
  return cart;
}

function addProduct(id) {
  var p = products.getAllProducts().find((c) => c.id == id);
  cart.push(p);
}

function removeProduct(id) {
  cart.splice(cart.indexOf(cart.find((c) => c.id == id)), 1);
}

function getTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].price);
  }
  return total;
}

module.exports = { getCart, addProduct, removeProduct, getTotal };
