const { application } = require("express");
const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get("/admin", adminController.admin);
router.get("/addAdmin", adminController.addAdmin);
router.get("/registerProduct", adminController.registerProduct);
router.get("/dropProduct", adminController.dropProduct);
router.get("/getProducts", adminController.getProducts);
router.get("/updateProduct", adminController.updateProduct);

module.exports = router;
