const proDB = require("../models/products");
const cart = require("../models/cart");
const addproduct = require("../services/products");
function index(req, res, next) {
  if (req.session.username != null) next();
  else {
    proDB.find().then((data) =>
      res.render("index.ejs", {
        User_Name: "guest",
        products: data,
        amount: cart.totalProds(),
      })
    );
  }
}
async function sessionfunc(req, res) {
  proDB.find().then((data) =>
    res.render("index.ejs", {
      User_Name: req.session.username,
      products: data,
      amount: cart.totalProds(),
    })
  );
}
module.exports = { index, sessionfunc };
