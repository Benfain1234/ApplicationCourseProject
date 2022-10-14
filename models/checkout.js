const cart = require("./cart");

function checkout() {
  return cart.getCart();
}

function getTotal() {
  return cart.getTotal();
}

module.exports = { checkout, getTotal };
