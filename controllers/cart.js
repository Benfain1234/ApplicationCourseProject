const cartModel = require("../models/cart");

function cart(req, res) {
  res.render("cart.ejs", {
    cart: cartModel.getCart(),
    total: cartModel.getTotal(),
  });
}
function addProd(req, res) {
  cartModel.addProduct(req.query.id);
  res.redirect("/");
}

function removeProd(req, res) {
  cartModel.removeProduct(req.query.id);
  res.redirect("/cart");
}

module.exports = { cart, addProd, removeProd };
