const { application } = require("express");
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/shop", shopController.shop);
router.get("/pricefilter1", shopController.PriceFilter1);
router.get("/pricefilter2", shopController.PriceFilter2);
router.get("/pricefilter3", shopController.PriceFilter3);
router.get("/pricefilter4", shopController.PriceFilter4);
router.get("/pricefilter5", shopController.PriceFilter5);

module.exports = router;
