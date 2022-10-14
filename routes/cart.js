const { application } = require("express");
const express = require("express");
const cartController = require("../controllers/cart");
const router = express.Router();

router.get("/cart", cartController.cart);
router.get("/addProduct", cartController.addProd);
router.get("/removeProduct", cartController.removeProd);

module.exports = router;
