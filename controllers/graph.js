const proDB = require("../models/products");




  async function graph(req, res) {
    proDB.find().then((data) =>
      res.render("graph.ejs", {
        products: data,
      })
    );
  }
  
 
  
  module.exports = { graph};
  
  



