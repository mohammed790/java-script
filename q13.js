// Question 13: Write a function that finds the largest number in an array.
// Answer:
function maxInArray(arr) {
  return arr.reduce((max, cur) => (cur > max ? cur : max), -Infinity);
}
console.log(maxInArray([1,3,7,2,4])); // 7
