const products = require("./products");

function getShop() {
  return products.getAllProducts();
}

function PriceFilter(Min,Max){
  const result = products.getAllProducts().filter(product => product.price>Min && product.price<Max);
  console.log(result);
  return result;
}


module.exports = { getShop ,PriceFilter};
