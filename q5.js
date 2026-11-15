// Question 5: Use the spread operator to merge two arrays, then return the merged array.
// Answer:
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(mergeArrays([1,2,3], [4,5,6])); // [1,2,3,4,5,6]
