const graphDB = require("../models/graph");
const mongoose = require("mongoose");
const { json } = require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/graph");


module.exports = router;
