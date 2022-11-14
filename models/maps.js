const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Map = new Schema({
  Name: String,
  Src: String,
});

module.exports = mongoose.model("Map", Map);
