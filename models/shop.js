const products = require("../services/products");
const proDB = require("./products");

function getShop() {
  return products.getAllProducts();
}

async function Filter(array) {
  let allProducts = await proDB.find().then((data) => {
    return data;
  });

  if (!array) {
    return allProducts;
  } else {
    let filtered = [];
    if (array.pricearray) {
      while (array.pricearray.length > 0) {
        let price = array.pricearray.splice(0, 1);

        allProducts.forEach((product) => {
          if (
            parseInt(product.price, 10) > parseInt("0", 10) &&
            parseInt(product.price, 10) <= parseInt("100", 10) &&
            price[0] === "100"
          ) {
            filtered.push(product);
          }

          if (
            parseInt(product.price, 10) > parseInt(price[0] - "100", 10) &&
            parseInt(product.price, 10) <= parseInt(price[0], 10) &&
            price[0] !== "100"
          ) {
            filtered.push(product);
          }
        });
      }
    }
    if (array.colorarray) {
      while (array.colorarray.length > 0) {
        let color = array.colorarray.splice(0, 1);
        allProducts.forEach((product) => {
          if (product.color === color[0]) {
            let index = filtered.findIndex(
              (p) => p.color === color[0] && p.id === product.id
            );
            console.log(index);
            if (index === -1) {
              filtered.push(product);
            }
          }
        });
      }
    }
    if (array.sizearray) {
      while (array.sizearray.length > 0) {
        let size = array.sizearray.splice(0, 1);
        allProducts.forEach((product) => {
          if (product.size === size[0]) {
            let index = filtered.findIndex(
              (p) => p.size === size[0] && p.id === product.id
            );
            if (index === -1) {
              filtered.push(product);
            }
          }
        });
      }
    }

    return filtered;
  }
}

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

async function SortBySize(array) {
  let result = await Filter(array);
  result.sort((a, b) => a.size_value - b.size_value);

  return result;
}

async function SortByColor(array) {
  let result = await Filter(array);
  result.sort((a, b) => {
    const color1 = a.color.toUpperCase(); // ignore upper and lowercase
    const color2 = b.color.toUpperCase(); // ignore upper and lowercase
    if (color1 < color2) {
      return -1;
    }
    if (color1 > color2) {
      return 1;
    }

    return 0;
  });

  return result;
}
module.exports = {
  getShop,
  Filter,
  SearchProduct,
  SortByPrice,
  SortBySize,
  SortByColor,
};
