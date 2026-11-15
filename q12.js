// Question 12: Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
// Answer:
function delayedSuccess() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Success'), 3000);
  });
}
// Example usage:
// delayedSuccess().then(console.log); // logs "Success" after 3 seconds
