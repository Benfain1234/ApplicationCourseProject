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

function SearchProduct(req,res){
  res.render("products.ejs", {
    products: shopModel.SearchProduct(req.body.filter,req.body.value),
  });
}

function SortByPrice(req,res){
  res.render("products.ejs", {
    products: shopModel.SortByPrice(req.body.filter),
  });
}

function SortBySize(req,res){
  res.render("products.ejs", {
    products: shopModel.SortBySize(req.body.filter),
  });
}
function SortByColor(req,res){
  res.render("products.ejs", {
    products: shopModel.SortByColor(req.body.filter),
  });
}

module.exports = { shop ,PriceFilter1, SearchProduct,SortByPrice,SortBySize,SortByColor};
