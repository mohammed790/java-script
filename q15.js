// Question 15: Write a function that splits a string into an array of words based on spaces.
// Answer:
function splitIntoWords(str) {
  return str.split(/\s+/).filter(Boolean);
}
console.log(splitIntoWords("The quick brown fox")); // ["The","quick","brown","fox"]
