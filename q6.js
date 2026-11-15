// Question 6: Use a switch statement to return the day of the week given a number (1 = Sunday … 7 = Saturday).
// Answer:
function getDayName(num) {
  switch (num) {
    case 1: return "Sunday";
    case 2: return "Monday";
    case 3: return "Tuesday";
    case 4: return "Wednesday";
    case 5: return "Thursday";
    case 6: return "Friday";
    case 7: return "Saturday";
    default: return "Invalid";
  }
}
console.log(getDayName(2)); // "Monday"
