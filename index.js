const express = require("express");
const app = express();
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/cart");
const checkoutRoutes = require("./routes/checkout");
const detailsRoutes = require("./routes/details");
const contactRoutes = require("./routes/contact");
const shopRoutes = require("./routes/shop");
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(productRoutes);
app.use(cartRoutes);
app.use(checkoutRoutes);
app.use(detailsRoutes);
app.use(contactRoutes);
app.use(shopRoutes);
app.listen(8080);
