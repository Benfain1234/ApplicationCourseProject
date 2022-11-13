const Users = require("../models/login");

function addUser(
  id,
  email,
  password,
  address,
  country,
  city,
  mobile,
  zipCode,
  admin
) {
  Users.findOne({ email: email }).then((e) => {
    if (e) {
      console.log("user already exists");
    } else {
      const user = new Users({
        email,
        password,
        address,
        country,
        city,
        mobile,
        zipCode,
        admin,
      });
      user.save();
    }
  });
}

module.exports = { addUser };
