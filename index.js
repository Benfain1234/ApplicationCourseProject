const express = require("express")
const ejs = require ("ejs")
const bodyParser = require("body-parser");
const app = express();

app.listen(8080);
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("pages/index");
});
app.get("/cart",function(req,res){
    res.render("pages/cart");
});
app.get("/checkout",function(req,res){
    res.render("pages/checkout");
});
app.get("/contact",function(req,res){
    res.render("pages/contact");
});
app.get("/detail",function(req,res){
    res.render("pages/detail");
});
app.get("/shop",function(req,res){
    res.render("pages/shop");
});