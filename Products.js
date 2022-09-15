let Products = [
    { id : 1, Name : "", Type: "shirt",Company : "h&m" , Price: 70.99, Supplier: "", ImgSrc: ""},
    { id : 2, Name : "", Type: "hoodies",Company : "zara" , Price: 189.99, Supplier: "" , ImgSrc: ""},
    { id : 3, Name : "", Type: "dress",Company : "nike" , Price: 47.86, Supplier: "", ImgSrc: "" },
    { id : 4, Name : "", Type: "shorts",Company : "adidas" , Price: 79.99, Supplier: "" , ImgSrc: ""},
    { id : 5, Name : "", Type: "jeans",Company : "pull and bear" , Price: 56, Supplier: "" , ImgSrc: ""},
    { id : 6, Name : "", Type: "shoes",Company : "adidas" , Price: 85, Supplier: "", ImgSrc: "" },
    { id : 7, Name : "", Type: "coat",Company : "pull and bear" , Price: 65.99, Supplier: "", ImgSrc: "" },
    { id : 8, Name : "", Type: "suit",Company : "h&m" , Price: 299.99, Supplier: "", ImgSrc: "" },
    { id : 9, Name : "", Type: "swimsuit",Company : "nike" , Price: 169.99, Supplier: "", ImgSrc: "" },
    { id : 10, Name : "", Type: "coat",Company : "zara" , Price: 189.99, Supplier: "", ImgSrc: "" },
    { id : 11, Name : "", Type: "shirt",Company : "adidas" , Price: 85.99, Supplier: "" , ImgSrc: ""}
];

exports.GetProducts =()=>{
    return Products;
}

exports.GetShirts =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="shirt"){
            result.push(p);
        }
    })
    return result;
}
exports.GetHoodies =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="hoodies"){
            result.push(p);
        }
    })
    return result;
}

exports.GetDress =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="dress"){
            result.push(p);
        }
    })
    return result;
}

exports.GetShorts =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="shorts"){
            result.push(p);
        }
    })
    return result;
}

exports.GetJeans =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="jeans"){
            result.push(p);
        }
    })
    return result;
}

exports.GetShoes =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="shoes"){
            result.push(p);
        }
    })
    return result;
}

exports.GetCoats =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="coat"){
            result.push(p);
        }
    })
    return result;
}

exports.GetSuit =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="suit"){
            result.push(p);
        }
    })
    return result;
}

exports.GetSwimSuit =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Type==="swimsuit"){
            result.push(p);
        }
    })
    return result;
}

exports.SortByPrice=(products)=>{
    products.sort((p1,p2)=>p1.Price- p2.Price);
    return products;
}

exports.GetHM =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Company==="h&m"){
            result.push(p);
        }
    })
    return result;
}
exports.GetNike =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Company==="nike"){
            result.push(p);
        }
    })
    return result;
}

exports.GetAdidas =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Company==="adidas"){
            result.push(p);
        }
    })
    return result;
}
exports.GetZara =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Company==="zara"){
            result.push(p);
        }
    })
    return result;
}
exports.GetPAB =()=>{
    let result = [];
    Products.forEach(p => {
        if (p.Company==="pull and bear"){
            result.push(p);
        }
    })
    return result;
}
// made a change
