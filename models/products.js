//const { all } = require("../routes/products");

const products = [

    {
    id: 1,
    title: "product1",
    desc: "shirt",
    price: "100",
    color:  "black",
      size: "M",
    src: "img/product-1.jpg",
  },
  {
    id: 2,
    title: "product2",
    desc: "dress",
    price: "101",
    color: "white",
    size: "S",
    src: "img/product-2.jpg",
  },
  {
    id: 3,
    title: "product3",
    desc: "t",
    price: "200",
    color: "red",
    size: "L",
    src: "img/product-3.jpg",
  },
  {
    id: 4,
    title: "product4",
    desc: "shoes",
    price: "450",
    color: "blue",
    size: "XL",
    src: "img/product-4.jpg",
  },
  {
    id: 5,
    title: "product5",
    desc: "pants",
    price: "220",
    color: "green",
    size: "L",
    src: "img/product-5.jpg",
  },
  {
    id: 6,
    title: "product6",
    desc: "underwear",
    price: "32",
    color: "blue",
    size: "M",
    src: "img/product-6.jpg",
  },
  {
    id: 7,
    title: "product7",
    desc: "sunglasses",
    price: "262",
    color:  "black",
    size: "S",
    src: "img/product-7.jpg",
  },
  {
    id: 8,
    title: "product8",
    desc: "scarf",
    price: "124",
    color: "white",
    size: "XS",
    src: "img/product-8.jpg",
  },
];

const categories = [
  {
    id: 1,
    title: "Category1",
    numOfProd: "15",
    src: "img/cat-1.jpg",
  },
  {
    id: 2,
    title: "Category2",
    numOfProd: "15",
    src: "img/cat-2.jpg",
  },
  {
    id: 3,
    title: "Category3",
    numOfProd: "15",
    src: "img/cat-3.jpg",
  },
  {
    id: 4,
    title: "Category4",
    numOfProd: "15",
    src: "img/cat-4.jpg",
  },
  {
    id: 5,
    title: "Category5",
    numOfProd: "15",
    src: "img/cat-5.jpg",
  },
  {
    id: 6,
    title: "Category6",
    numOfProd: "15",
    src: "img/cat-6.jpg",
  },
];
const price1product = [
  {
    id: 1,
    title: "product1",
    desc: "shirt",
    price: "100",
    src: "img/product-1.jpg",
  }
]
 const price2product = [  {
   id: 2,
   title: "product2",
   desc: "dress",
   price: "101",
   src: "img/product-2.jpg",
 },
   {
   id: 3,
   title: "product3",
   desc: "t",
   price: "200",
   src: "img/product-3.jpg",}


 ]
const price3product = [   {
  id: 3,
  title: "product3",
  desc: "t",
  price: "200",
  src: "img/product-3.jpg",}]
const price4product = [  {
  id: 6,
  title: "product6",
  desc: "underwear",
  price: "320",
  src: "img/product-6.jpg",
}]
const price5product = [  {
  id: 4,
  title: "product4",
  desc: "shoes",
  price: "450",
  src: "img/product-4.jpg",
}]

function getAllProducts() {
  return products;
}

module.exports = { getAllProducts ,price1product,price2product,price3product,price4product,price5product};
