const Users = require("../models/login");

function LoginToUser(email, password) {
  Users.findOne({ email: email, password: password }).then((user) => {
    if (!user) {
      console.log("email or password incorrect");
    }
  });
}

module.exports = { LoginToUser };
