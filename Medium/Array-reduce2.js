const shoppingCart = [
  { id: 1, productName: 'bag', productPrice: 100 },
  { id: 11, productName: 'shoes', productPrice: 10 },
  { id: 111, productName: 'lip Balm', productPrice: 1 },
];

//final total of the shopping cart
const finalVal = shoppingCart.reduce((acc, curr) => {
  return acc + curr.productPrice;
}, 0);
console.log(`finalVal: ${finalVal}`);
