const { application } = require("express");
const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/shop", shopController.shop);
router.post("/pricefilter1", shopController.PriceFilter1);
router.post("/searchproduct", shopController.SearchProduct);
router.post("/sortbyprice",shopController.SortByPrice);
router.post("/sortbysize",shopController.SortBySize);
router.post("/sortbycolor",shopController.SortByColor);

module.exports = router;
