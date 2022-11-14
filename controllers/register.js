const registerServices = require("../services/register");
const proDB = require("../models/products");
const cart = require("../models/cart");

function Register(req, res) {
  res.render("register.ejs", {
    explanation: "Register our system to enjoy more content",
  });
}

function AddUser(req, res) {
  let valid = true;
  if (req.body.email == "") {
    valid = false;
    res.render("register.ejs", { explanation: "Email input is empty" });
  }
  if (req.body.password == "") {
    valid = false;
    res.render("register.ejs", { explanation: "Password input is empty" });
  }
  if (req.body.password.length < 10) {
    valid = false;
    res.render("register.ejs", {
      explanation: "Password is need to be with at least 10 characters",
    });
  }
  if (req.body.address == "") {
    valid = false;
    res.render("register.ejs", { explanation: "Address input is empty" });
  }
  if (req.body.country == "") {
    valid = false;
    res.render("register.ejs", { explanation: "Country input is empty" });
  }
  if (req.body.city == "") {
    valid = false;
    res.render("register.ejs", { explanation: "City input is empty" });
  }
  if (
    req.body.mobile == "" ||
    isNaN(req.body.mobile) == true ||
    req.body.mobile.length !== 10
  ) {
    valid = false;
    res.render("register.ejs", { explanation: "Mobile input is not valid" });
  }
  if (req.body.zipCode == "" || isNaN(req.body.zipCode) == true) {
    valid = false;
    res.render("register.ejs", { explanation: "ZipCode input is not valid" });
  }
  if (valid === true) {
    registerServices.addUser(
      req.body.id,
      req.body.email,
      req.body.password,
      req.body.address,
      req.body.country,
      req.body.city,
      req.body.mobile,
      req.body.zipCode,
      req.body.admin
    );
    proDB.find().then((data) =>
      res.render("index.ejs", {
        User_Name: req.body.email.split("@")[0],
        products: data,
        amount: cart.totalProds(),
      })
    );
  }
}

module.exports = {  Register,  AddUser };
