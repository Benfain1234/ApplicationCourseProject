const { application } = require("express");
const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

// app.get("/", function (req, res) {
//   res.render("pages/index");
// });
router.get("/", productsController.index);
// app.get("/cart", function (req, res) {
//   res.render("pages/cart");
// });
// app.get("/checkout", function (req, res) {
//   res.render("pages/checkout");
// });
// app.get("/contact", function (req, res) {
//   res.render("pages/contact");
// });
// app.get("/detail", function (req, res) {
//   res.render("pages/detail");
// });
// app.get("/shop", function (req, res) {
//   res.render("pages/shop");
// });

module.exports = router;
