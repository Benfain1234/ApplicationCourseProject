const proDB = require("./products");

async function SearchProduct(array, value) {
  const v = await proDB.find().then((data) => {
    return data;
  });
  const final = v.filter((product) => product.title.includes(value));
  return final;
}

async function SortByPrice(array) {
  let result = await Filter(array);
  console.log(result);
  result.sort((a, b) => a.price - b.price);

  return result;
}


module.exports = {
  SearchProduct,
  SortByPrice,
};
