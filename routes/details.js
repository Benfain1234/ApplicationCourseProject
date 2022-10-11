const { application } = require("express");
const express = require("express");
const detailsController = require("../controllers/details");
const router = express.Router();

router.get("/detail", detailsController.details);

module.exports = router;
