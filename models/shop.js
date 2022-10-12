const products = require("./products");

function getShop() {
  return products.getAllProducts();
}

function PriceFilter(Min,Max){
  const result = products.getAllProducts().filter(product => product.price>Min && product.price<Max);
  console.log(result);
  return result;
}
 function Filter(array){
     let allProducts = products.getAllProducts();
   if(!array){return allProducts};
   let filtered = [];
   if(array.pricearray){
       while(array.pricearray.length>0){
           let price = array.pricearray.splice(0,1);
           allProducts.forEach(product => {
               if(product.price>price[0]-100&&product.price<=price[0]){
                   filtered.push(product);
               }
           })


       }
   }
   if(array.colorarray){
       while (array.colorarray.length>0){
           let color = array.colorarray.splice(0,1);
           allProducts.forEach(product =>{
               if(product.color=== color[0]){
                   let index = filtered.findIndex(p => p.color === color[0]&& p.id === product.id)
                   console.log(index);
                   if(index===-1){  filtered.push(product);}

               }
           })
       }
   }
 if(array.sizearray){
   while(array.sizearray.length>0){
       let size = array.sizearray.splice(0,1);
       allProducts.forEach(product =>{
           if(product.size === size[0]){
               let index = filtered.findIndex(p => p.size === size[0]&& p.id === product.id)
               if(index===-1){filtered.push(product)}
           }
       })
   }
 }

  return filtered;
}

module.exports = { getShop ,PriceFilter,Filter};
