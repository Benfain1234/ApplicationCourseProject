<<<<<<< Updated upstream
const products = require("../services/products");
const cart = [];

function getCart() {
  return cart;
}

function addProduct(id) {
  products.findProduct(id).then((e) => {
    if (cart.findIndex((item) => item.equals(e)) !== -1) {
      var prod = cart.find((c) => c.id == id);
      prod.quantity = parseInt(prod.quantity) + 1;
    } else {
      e.quantity = 1;
      cart.push(e);
    }
  });
}

function totalProds() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].quantity);
  }
  return total;
}

function decreaseProduct(id) {
  var p = cart.find((c) => c.id == id);
  if (p !== null && parseInt(p.quantity) > 1) {
    p.quantity = parseInt(p.quantity) - 1;
  } else if (p !== null) {
    cart.splice(cart.indexOf(p), 1);
  }
}

function removeProduct(id) {
  var p = cart.find((c) => c.id == id);
  if (p !== null) cart.splice(cart.indexOf(p), 1);
}

function getTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].price) * parseInt(cart[i].quantity);
  }
  return total;
}

function EmptyCart(){

  cart.length = 0;

}
module.exports = {
  getCart,
  addProduct,
  removeProduct,
  decreaseProduct,
  getTotal,
  totalProds,
  EmptyCart,
};
=======
const products = require("../services/products");
const cart = [];

function getCart() {
  return cart;
}

function addProduct(id) {
  products.findProduct(id).then((e) => {
    if (cart.findIndex((item) => item.equals(e)) !== -1) {
      var prod = cart.find((c) => c.id == id);
      prod.quantity = parseInt(prod.quantity) + 1;
    } else {
      e.quantity = 1;
      cart.push(e);
    }
  });
}

function totalProds() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].quantity);
  }
  return total;
}

function decreaseProduct(id) {
  var p = cart.find((c) => c.id == id);
  if (p !== null && parseInt(p.quantity) > 1) {
    p.quantity = parseInt(p.quantity) - 1;
  } else if (p !== null) {
    cart.splice(cart.indexOf(p), 1);
  }
}

function removeProduct(id) {
  var p = cart.find((c) => c.id == id);
  if (p !== null) cart.splice(cart.indexOf(p), 1);
}

function getTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += parseInt(cart[i].price) * parseInt(cart[i].quantity);
  }
  return total;
}

function EmptyCart(){

  cart.length = 0;

}
module.exports = {
  getCart,
  addProduct,
  removeProduct,
  decreaseProduct,
  getTotal,
  totalProds,
  EmptyCart,
};
>>>>>>> Stashed changes
