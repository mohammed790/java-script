// Question 11: Write a function that accepts multiple parameters (two or more) and returns their sum.
// Answer:
function sumMultiple(...nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}
console.log(sumMultiple(1,2,3,4,5)); // 15
