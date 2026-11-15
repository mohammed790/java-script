// Question 4: Create an array of numbers and return only the even numbers using filter method.
// Answer:
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(getEvenNumbers([1,2,3,4,5])); // [2,4]
