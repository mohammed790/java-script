/** Question: Bonus - Counter II (LeetCode)
* Goal:
Create a function `createCounter(init)` that takes a starting integer `init`[cite: 1]
and returns an object containing three methods[cite: 1]:
  1. increment() -> Adds 1 to the current value and returns it[cite: 1].
  2. decrement() -> Subtracts 1 from the current value and returns it[cite: 1].
  3. reset()     -> Resets the current value back to `init` and returns it[cite: 1].

Example:
  const counter = createCounter(5);[cite: 1]
  counter.increment(); // 6 (5 + 1)[cite: 1]
  counter.reset();     // 5 (back to initial value)[cite: 1]
  counter.decrement(); // 4 (5 - 1)[cite: 1]
*/

// Solution:

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    // Store a mutable copy of the initial value[cite: 1]
    let currentCount = init;

    return {
        // Increase currentCount by 1 and return the new value[cite: 1]
        increment: function() {
            return ++currentCount;
        },
        // Decrease currentCount by 1 and return the new value[cite: 1]
        decrement: function() {
            return --currentCount;
        },
        // Restore currentCount back to the original init value and return it[cite: 1]
        reset: function() {
            currentCount = init;
            return currentCount;
        }
    };
};
