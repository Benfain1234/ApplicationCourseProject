const proDB = require("../models/products");
const adminServices = require("../services/admin");
const servicesProd = require("../services/products");
const cart = require("../models/cart");

function admin(req, res) {
  proDB.find().then((data) =>
    res.render("admin.ejs", {
      products: data,
      cart: cart.getCart(),
      amount: cart.totalProds(),
    })
  );
}
function registerProduct(req, res) {
  servicesProd.addProduct(
    req.query.title,
    req.query.desc,
    req.query.price,
    req.query.color,
    req.query.size,
    "1",
    req.query.src
  );
  proDB.find().then((data) => {
    setTimeout(() => {
      res.redirect("/admin");
    }, 1000);
  });
}

function updateProduct(req, res) {
  console.log(req);
  proDB.findOne({ id: req.query.id }).then((prod) => {
    const query = req.query;
    const filter = { id: query.id };
    const update = {
      title: query.title,
      desc: query.desc,
      price: query.price,
      color: query.color,
      size: query.size,
      quantity: query.quantity,
      src: query.src,
    };
    proDB.findOneAndUpdate(filter, update).then((data) => {
      res.redirect("/admin");
    });
  });
}

function addAdmin(req, res) {
  adminServices.addAdmin(req.query.email);
  res.redirect("/login");
}

function getProducts(req, res) {
  proDB.find().then((data) => {
    res.json(data);
  });
}

function dropProduct(req, res) {
  servicesProd.removeProduct(req.query.id);
  proDB.find().then((data) => {
    res.json(data);
  });
}
module.exports = {
  admin,
  registerProduct,
  dropProduct,
  getProducts,
  addAdmin,
  updateProduct,
};
