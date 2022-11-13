<<<<<<< Updated upstream
const checkoutModel = require("../models/checkout");

function checkout(req, res) {
  res.render("checkout.ejs", {
    checkout: checkoutModel.checkout(),
    total: checkoutModel.getTotal(),
  });
}

module.exports = { checkout };
=======
const checkoutModel = require("../models/checkout");
const cart = require("../models/cart");
Users = require("../models/login");

function Checkout(req, res) {
  Users.findOne({ id: req.session.id }).then((user) => {
    res.render("checkout.ejs", {
      user: user,
      checkout: checkoutModel.checkout(),
      total: checkoutModel.getTotal(),
      amount: cart.totalProds(),
    });
  });
}

module.exports = { Checkout };
>>>>>>> Stashed changes
