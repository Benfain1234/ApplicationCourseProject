const contactModel = require("../models/contact");

function contact(req, res) {
  res.render("contact.ejs", {
    // checkout: checkoutModel.checkout(),
    // total: checkoutModel.getTotal(),
  });
}

module.exports = { contact };
