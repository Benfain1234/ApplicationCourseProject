const detailModel = require("../models/details");

function details(req, res) {
  res.render("detail.ejs", {
    // checkout: checkoutModel.checkout(),
    // total: checkoutModel.getTotal(),
  });
}

module.exports = { details };
