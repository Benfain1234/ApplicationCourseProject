const express = require("express");
const pieController = require("../controllers/pie");
const router = express.Router();

router.get("/pie", pieController.pie);
module.exports = router;
