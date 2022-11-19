const { application } = require("express");
const express = require("express");
const cartController = require("../controllers/cart");
const router = express.Router();

router.get("/cart", cartController.cart);
router.get("/addProduct", cartController.addProd);
router.get("/decreaseProduct", cartController.decreaseProd);
router.get("/increaseProduct", cartController.increaseProd);
router.get("/removeProduct", cartController.removeProd);

module.exports = router;
