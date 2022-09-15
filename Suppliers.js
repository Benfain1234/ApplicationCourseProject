const Suppliers = [{ Name:"FedEx" , Days:["Sunday","Wednesday"],DeliveryPrice: 20},{
                   Name:"UPS" , Days:["Monday","Wednesday"],DeliveryPrice: 30},
                  {  Name:"Amazon" , Days:["Sunday","Thursday","Friday"],DeliveryPrice: 15}
                                                              ]

exports.GetSupplierByName=(name)=>{
    console.log(name);
   const result = Suppliers.find(s =>s.Name === name);
   console.log(result);
   return result;
}
