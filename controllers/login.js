Users = require("../models/login");
const cart = require("../models/cart");
const proDB = require("../models/products");
const adminDB = require("../models/admin");
const mapDB = require("../models/maps");

function Login(req, res) {
  res.render("login.ejs", {
    explanation:
      "Our users can see more products and get notification about new products",
    total: cart.totalProds(),
  });
}

function LoginToUser(req, res) {
  adminDB
    .findOne({ email: req.body.email, password: req.body.password })
    .then((admin) => {
      if (admin) {
        const [first, ...rest] = admin.email.split("@");
        req.session.username = first;
        req.session.id = admin.id;
        proDB.find().then((data) => {
          res.render("admin.ejs", {
            User_name: req.session.username,
            products: data,
            amount: cart.totalProds(),
          });
          
        });
      } else if (!admin) {
        Users.findOne({
          email: req.body.email,
          password: req.body.password,
        }).then((user) => {
          if (!user) {
            console.log("email or password incorrect");
            res.render("login.ejs", {
              explanation: "Email Or Password Incorrect",
              total: cart.totalProds(),
            });
          } else {
            const [first, ...rest] = user.email.split("@");
            req.session.username = first;
            req.session.id = user.id;
            res.redirect("/");
          }
        });
      }
    });
}

async function FindTelAviv(req, res) {
  mapDB.find({ Name: "Tel-Aviv" }).then((data) => {
    res.render("map.ejs", {
      cityname: data[0].Name,
      Src: data[0].Src,
    });
  });
}
async function FindBatYam(req, res) {
  mapDB.find({ Name: "Bat-Yam" }).then((data) => {
    res.render("map.ejs", {
      cityname: data[0].Name,
      Src: data[0].Src,
    });
  });
}

async function FindRishon(req, res) {
  mapDB.find({ Name: "Rishon-Lezion" }).then((data) => {
    res.render("map.ejs", {
      cityname: data[0].Name,
      Src: data[0].Src,
    });
  });
}
function IsConnect(req, res) {
  if (req.session.username != null) {
    res.json(true);
  } else {
    res.json(false);
  }
}

function Logout(req, res) {
  req.session.destroy(() => {
    res.redirect("/login");
  });
}
module.exports = {
  Login,
  LoginToUser,
  FindTelAviv,
  FindBatYam,
  FindRishon,
  Logout,
  IsConnect,
};
