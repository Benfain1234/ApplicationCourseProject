const shopModel = require("../models/shop");

function shop(req, res) {
  res.render("shop.ejs", {
    products: shopModel.getShop(),
  });
}
function PriceFilter1(req, res) {

  res.render("products.ejs", {
    products: shopModel.Filter(req.body.filter),
  });
}




module.exports = { shop ,PriceFilter1};
