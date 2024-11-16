//set data structure it just stores uniq values ^_^
function removeDup(arr) {
  return [...new Set(arr)];
}

const inputArray = ["apple", "banana", "apple", "apple", "banana", "apple"];
const array = removeDup(array);
