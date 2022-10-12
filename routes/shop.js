const { application } = require("express");
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/shop", shopController.shop);
router.post("/pricefilter1", shopController.PriceFilter1);


module.exports = router;
