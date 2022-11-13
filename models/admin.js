const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const admin = new Schema({
  email: String,
  password: String,
  address: String,
  country: String,
  city: String,
  mobile: String,
  zipCode: String,
});

module.exports = mongoose.model("admin", admin);
