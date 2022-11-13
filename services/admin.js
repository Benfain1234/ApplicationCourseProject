const admins = require("../models/admin");
const userDB = require("../models/login");

function addAdmin(email) {
  userDB.findOne({ email: email }).then((d) => {
    if (d) {
      admins.findOne({ email: d.email }).then((data) => {
        if (data) {
          console.log("user is admin already");
        } else {
          const admin = new admins({
            email: d.email,
            password: d.password,
            address: d.address,
            country: d.country,
            city: d.city,
            mobile: d.mobile,
            zipCode: d.zipCode,
            admin: true,
          });
          admin.save();
        }
      });
    } else {
      console.log("user do not exist");
    }
  });
}

module.exports = { addAdmin };
