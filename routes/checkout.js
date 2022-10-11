const { application } = require("express");
const express = require("express");
const checkoutController = require("../controllers/checkout");
const router = express.Router();

router.get("/checkout", checkoutController.checkout);

module.exports = router;
