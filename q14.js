// Question 14: Write a function that takes an object and returns an array containing only its keys.
// Answer:
function getObjectKeys(obj) {
  return Object.keys(obj);
}
console.log(getObjectKeys({name: "John", age: 30})); // ["name", "age"]
