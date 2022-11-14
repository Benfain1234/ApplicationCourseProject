const proDB = require("../models/products");
const cart = require("../models/cart");
const shopModel = require("../models/shop");


function Shop(req, res) {
  proDB.find().then((data) =>
    res.render("shop.ejs", {
      products: data,
      cart: cart.getCart(),
      amount: cart.totalProds(),
    })
  );
}
function PriceFilter1(req, res) {
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

function ColorFilter(req, res) {
  proDB.find({ color: req.query.color }).then((data) => {
    res.json(data);
  });
}

function SearchProd(req, res) {
  const regx = req.query.prodName;
  proDB
    .find({
      $or: [
        { title: new RegExp(regx) },
        { desc: new RegExp(regx) },
        { color: new RegExp(regx) },
      ],
    })
    .then((data) => {
      console.log(data);
      res.json(data);
    });
}

function SizeFilter(req, res) {
  proDB.find({ size: req.query.size }).then((data) => {
    res.json(data);
  });
}

async function SearchProduct(req, res) {
  res.render("products.ejs", {
    products: await shopModel.SearchProduct(req.body.filter, req.body.value),
  });
}

async function SortByPrice(req, res) {
  proDB.find().then((data) => {
    let sortedProducts = data.sort((p1, p2) =>
      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
    );
    res.json(sortedProducts);
  });
}

module.exports = {
  Shop,
  PriceFilter1,
  ColorFilter,
  SizeFilter,
  SearchProd,
  SearchProduct,
  SortByPrice,
};
