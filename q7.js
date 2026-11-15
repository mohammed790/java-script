// Question 7: Create an array of strings and return their lengths using map method.
// Answer:
function getLengths(arr) {
  return arr.map(str => str.length);
}
console.log(getLengths(["a", "ab", "abc"])); // [1,2,3]
