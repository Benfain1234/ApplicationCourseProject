<<<<<<< Updated upstream
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
=======

const express = require("express");
const shopController = require("../controllers/shop");
const router = express.Router();

router.get("/shop", shopController.Shop);
router.get("/pricefilter1", shopController.PriceFilter1);
router.get("/colorFilter", shopController.ColorFilter);
router.get("/sizeFilter", shopController.SizeFilter);
router.get("/searchproduct", shopController.SearchProduct);
router.get("/sortByPrice", shopController.SortByPrice);
router.get("/searchProd", shopController.SearchProd);

module.exports = router;
>>>>>>> Stashed changes
