const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema({
  email: String,
  password: String,
  address: String,
  country: String,
  city: String,
  mobile: String,
  zipCode: String,
  admin: Boolean,
});

module.exports = mongoose.model("Users", Users);
