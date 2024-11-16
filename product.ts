//  Instructions to Run product.ts:
// Step 1: using typescript compiler to compile the TS to JS
// command : tsc product.ts
// step 2 : Run the compiled JS from TS using Node.js
// command : node product.js

// Task 4:
//  Product Interface and Total Price Calculation
/* define the product interface Calculates the total price of all products in an array
 * How it works :
 * the interface define the product with name and price properties
 * the reduce method used to calculate the total price starting the the initial value of the accumulator which set to 0 and sum all the numbers as a loop*/

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
// Task 5 Email regex
/**
 * provide a function which validates if the enterd email by the user is correct using  regular expressions
 *  How it Works:
 * isValid function accept string input (email)
 *  it uses the Regex Logic
 *  test method to check if the entered email matches the emailRegex then return a boolean
 *
 */

function isValid(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
