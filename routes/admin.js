const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/admin", adminController.Admin);
router.get("/addAdmin", adminController.AddAdmin);
router.get("/registerProduct", adminController.RegisterProduct);
router.get("/dropProduct", adminController.DropProduct);
router.get("/getProducts", adminController.GetProducts);
router.get("/updateProduct", adminController.UpdateProduct);

module.exports = router;
