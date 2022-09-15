var express = require('express');
var router = express.Router();
const Users = require('../models/Users');
const Products = require('../models/Products');
const Suppliers =  require('../models/Suppliers');

/* GET home page. */
router.get('/', function(req, res, next) {
   let products = Products.GetProducts();
   let supplier = Suppliers.GetSupplierByName(products[0].Supplier) ;
   console.log(supplier);
  res.render('index', { title: "node.js" ,reqType: '/login'});

});

router.get('/Register', function(req, res, next) {
  res.render('index', { title: "Add New User" ,reqType: '/AddUser'});
});

router.post('/login', function(req, res, next) {
  var user = Users.FindUser(req.body.username,req.body.password)
  console.log(user);
  if (user==null){
    res.render('index', { title: "Cant find this user" });
  }else {
    res.render('index', { title: "Hello " + req.body.username });
  }

});

module.exports = router;
