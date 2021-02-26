var listingPrice = 799;
var sellingPrice = 199;
var discount = ((listingPrice-sellingPrice)/listingPrice) * 100;
console.log(`
The Discount provided is : ${Math.floor(discount)}%
`);