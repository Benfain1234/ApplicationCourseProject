const { application } = require("express");
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/shop", shopController.shop);
router.get("/filter", shopController.filter);
router.get("/sortByPrice", shopController.sortByPrice);

module.exports = router;
