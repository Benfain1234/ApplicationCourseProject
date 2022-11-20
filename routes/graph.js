const express = require("express");
const graphController = require("../controllers/graph");
const router = express.Router();
router.get("/graph", graphController.graph);
module.exports = router;
