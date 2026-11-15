// Question 8: Write a function that checks if a number is divisible by 3 and 5.
// Answer:
function divisibleBy3And5(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  }
  return "Not divisible by both";
}
console.log(divisibleBy3And5(15)); // "Divisible by both"
