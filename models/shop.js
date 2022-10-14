const products = require("./products");

function getShop() {
  return products.getAllProducts();
}


 function Filter(array){
     let allProducts = products.getAllProducts();
   if(!array){return allProducts};
   let filtered = [];
   if(array.pricearray){
       while(array.pricearray.length>0){
           let price = array.pricearray.splice(0,1);
           console.log(price[0]);
           allProducts.forEach(product => {

               if(product.price>0&&product.price<=100&&price[0]==100){
                   filtered.push(product);
               }

               if(product.price>price[0]-100&&product.price<=price[0]&&price[0]!=100){
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

function SearchProduct(array,value){
 let result = Filter(array);
    const final = result.filter(product => product.title.includes(value));

 return final;
}

function SortByPrice(array){
    let result = Filter(array);
    result.sort((a,b)=> a.price-b.price )

    return result;
}

function SortBySize(array){
    let result = Filter(array);
    result.sort((a,b)=> a.size_value-b.size_value )

    return result;
}

function SortByColor(array){
    let result = Filter(array);
    result.sort((a,b)=> {
        const color1 = a.color.toUpperCase(); // ignore upper and lowercase
        const color2 = b.color.toUpperCase(); // ignore upper and lowercase
        if (color1 < color2) {
            return -1;
        }
        if (color1 > color2) {
            return 1;
        }


        return 0;
    } );

    return result;
}
module.exports = { getShop ,Filter,SearchProduct,SortByPrice,SortBySize,SortByColor};
