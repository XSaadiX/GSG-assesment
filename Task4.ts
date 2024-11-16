interface Product {
  name: string;
  price: number;
}

function totalPrice(products: Product[]): number {
  return products.reduce((total, product) => total + product.price, 0);
}

const products: Product[] = [
  { name: "Apple", price: 1200 },
  { name: "Banana", price: 25 },
  { name: "Orange", price: 45 },
];

const totalPrices = totalPrice(products);
console.log(`Total Price: $${totalPrices}`);
