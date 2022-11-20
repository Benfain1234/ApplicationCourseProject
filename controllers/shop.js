const proDB = require("../models/products");
const cart = require("../models/cart");
const shopModel = require("../models/shop");
const products = require("../models/products");

function shop(req, res) {
  proDB.find().then((data) =>
    res.render("shop.ejs", {
      products: data,
      cart: cart.getCart(),
      amount: cart.totalProds(),
    })
  );
}
function filter(req, res) {
  proDB
    .find({ price: { $gte: req.query.min, $lte: req.query.max } })
    .then((data) => {
      var name = req.query.name;
      if (name.length > 0) {
        data = data.filter(
          (c) =>
            c.title.toLowerCase().indexOf(name.toLowerCase()) >= 0 ||
            c.desc.toLowerCase().indexOf(name.toLowerCase()) >= 0 ||
            c.color.toLowerCase().indexOf(name.toLowerCase()) >= 0
        );
      }
      var result = [];
      var colors = req.query.color[0].split(",");
      var sizes = req.query.size[0].split(",");
      if (colors == "" && sizes == "") {
        res.json(data);
      } else if (sizes == "") {
        for (var i = 0; i < data.length; i++) {
          if (colors.includes(data[i].color)) {
            result.push(data[i]);
          }
        }
        res.json(result);
      } else if (colors == "") {
        for (var i = 0; i < data.length; i++) {
          if (sizes.includes(data[i].size)) {
            result.push(data[i]);
          }
        }
        res.json(result);
      } else {
        for (var i = 0; i < data.length; i++) {
          if (colors.includes(data[i].color) && sizes.includes(data[i].size)) {
            result.push(data[i]);
          }
        }
        res.json(result);
      }
    });
}

async function sortByPrice(req, res) {
  proDB.find().then((data) => {
    let sortedProducts = data.sort((p1, p2) =>
      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
    );
    res.json(sortedProducts);
  });
}

module.exports = {
  shop,
  filter,
  sortByPrice,
};
