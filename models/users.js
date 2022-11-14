const mongoose = require("mongoose");
const schema = mongoose.schema;

const user = new schema({
  username: String,
  password: String,
  admin: Boolean,
});

module.exports = mongoose.model("user", user);
