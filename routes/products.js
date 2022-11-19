const { application } = require("express");
const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

router.get("/", productsController.index, productsController.sessionfunc);

module.exports = router;
