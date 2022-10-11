const { application } = require("express");
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/shop", shopController.shop);
router.post("/pricefilter1", shopController.PriceFilter1);
router.post("/pricefilter2", shopController.PriceFilter2);
router.post("/pricefilter3", shopController.PriceFilter3);
router.post("/pricefilter4", shopController.PriceFilter4);
router.post("/pricefilter5", shopController.PriceFilter5);

module.exports = router;
