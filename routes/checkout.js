<<<<<<< Updated upstream
const { application } = require("express");
const express = require("express");
const checkoutController = require("../controllers/checkout");
const router = express.Router();

router.get("/checkout", checkoutController.checkout);

module.exports = router;
=======
const express = require("express");
const checkoutController = require("../controllers/checkout");
const router = express.Router();

router.get("/checkout", checkoutController.Checkout);

module.exports = router;
>>>>>>> Stashed changes
