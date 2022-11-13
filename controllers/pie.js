const proDB = require("../models/products");
const progh=  require("../models/products");

async function pie(req, res) {
  progh.find().then((data) =>
    res.render("pie.ejs", {
      products: data,
    })
  );
}




module.exports = { pie};
