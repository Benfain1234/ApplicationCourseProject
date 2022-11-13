<<<<<<< Updated upstream
const productsModel = require("../models/products");
const cart = require("../models/cart");

function index(req, res) {
  res.render("index.ejs", {
    products: productsModel.getAllProducts(),
    cart: cart.getCart(),
  });
}

module.exports = { index };
=======
const proDB = require("../models/products");
const cart = require("../models/cart");


function Index(req, res, next) {
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
async function SessionFunc(req, res) {
  proDB.find().then((data) =>
    res.render("index.ejs", {
      User_Name: req.session.username,
      products: data,
      amount: cart.totalProds(),
    })
  );
}
module.exports = { Index, SessionFunc };
>>>>>>> Stashed changes
