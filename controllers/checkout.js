const checkoutModel = require("../models/checkout");

function checkout(req, res) {
  res.render("checkout.ejs", {
    checkout: checkoutModel.checkout(),
    total: checkoutModel.getTotal(),
  });
}

module.exports = { checkout };
