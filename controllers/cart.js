const cartModel = require("../models/cart");

function cart(req, res) {
  res.render("cart.ejs", {
    cart: cartModel.getCart(),
    total: cartModel.getTotal(),
    amount: cartModel.totalProds(),
  });
}
function addProd(req, res) {
  cartModel.addProduct(req.query.id);
  var totalProd = cartModel.totalProds();
  res.json(totalProd);
}

function removeProd(req, res) {
  cartModel.removeProduct(req.query.id);
  var totalProd = cartModel.getCart();
  res.json(totalProd);
}

function decreaseProd(req, res) {
  cartModel.decreaseProduct(req.query.id);
  var totalProd = cartModel.getCart();
  res.json(totalProd);
}
function increaseProd(req, res) {
  cartModel.increaseProduct(req.query.id);
  var totalProd = cartModel.getCart();
  res.json(totalProd);
}

module.exports = { cart, addProd, removeProd, decreaseProd, increaseProd };
