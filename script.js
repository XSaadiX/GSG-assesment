// Task 2
// using reduce method for the sum of numbers;
const numbers = [1, 2, 3, 4];
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//Task 3 set data structure it just stores uniq values ^_^
function removeDup(arr) {
  return [...new Set(arr)];
}

const inputArray = ["apple", "banana", "apple", "apple", "banana", "apple"];
const array = removeDup(array);
