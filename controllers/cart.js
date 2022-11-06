const cartModel = require("../models/cart");

function Cart(req, res) {
  res.render("cart.ejs", {
    cart: cartModel.getCart(),
    total: cartModel.getTotal(),
    amount: cartModel.totalProds(),
  });
}
function AddProd(req, res) {
  cartModel.addProduct(req.query.id);
  var totalProd = cartModel.totalProds();
  res.json(totalProd);
}

function RemoveProd(req, res) {
  cartModel.removeProduct(req.query.id);
  var totalProd = cartModel.getCart();
  res.json(totalProd);
}

function DecreaseProd(req, res) {
  cartModel.decreaseProduct(req.query.id);
  var totalProd = cartModel.getCart();
  res.json(totalProd);
}

function EmptyCart(req,res){
   console.log(cartModel.getCart().length);
  if (cartModel.getCart().length===0){res.json(false)}
  cartModel.EmptyCart();
  if (cartModel.getCart().length===0){
    res.json(true)
  }else {res.json(false)}
}


module.exports = { Cart, AddProd, RemoveProd, DecreaseProd,EmptyCart };
