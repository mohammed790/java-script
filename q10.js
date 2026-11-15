// Question 10: Write a function that destructures an object to extract values and returns a formatted string.
// Answer:
function formatPerson({ name, age }) {
  return `${name} is ${age} years old`;
}
const person = { name: 'John', age: 25 };
console.log(formatPerson(person)); // 'John is 25 years old'
