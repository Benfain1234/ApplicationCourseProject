const shopModel = require("../models/shop");

function shop(req, res) {
  res.render("shop.ejs", {
    products: shopModel.getShop(),
  });
}
function PriceFilter1(req, res) {
  console.log(req.body);
  res.render("products.ejs", {
    products: shopModel.PriceFilter(0,100),
  });
}


function PriceFilter2(req, res) {
  res.render("products.ejs", {
    products: shopModel.PriceFilter(100,200),
  });
}
function PriceFilter3(req, res) {
  res.render("products.ejs", {
    products: shopModel.PriceFilter(200,300),
  });
}
function PriceFilter4(req, res) {
  res.render("products.ejs", {
    products: shopModel.PriceFilter(300,400),
  });
}
function PriceFilter5(req, res) {
  res.render("products.ejs", {
    products: shopModel.PriceFilter(400,500),
  });
}

module.exports = { shop ,PriceFilter1,PriceFilter2,PriceFilter3,PriceFilter4,PriceFilter5};
