const checkoutModel = require("../models/checkout");
const cart = require("../models/cart");
Users = require("../models/login");

function checkout(req, res) {
  Users.findOne({ id: req.session.id }).then((user) => {
    res.render("checkout.ejs", {
      user: user,
      checkout: checkoutModel.checkout(),
      total: checkoutModel.getTotal(),
      amount: cart.totalProds(),
    });
  });
}

module.exports = { checkout };
