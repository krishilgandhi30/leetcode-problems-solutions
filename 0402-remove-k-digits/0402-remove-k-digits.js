/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    const stack = [];
    let removed = 0;

    for (let digit of num) {
        console.log("Digit: ", digit)
        while (stack.length > 0 && digit < stack[stack.length - 1] && removed < k) {
            stack.pop();
            removed++;
        }
        stack.push(digit);
    }
    console.log("Stack: ", stack)

    // Handle the case where the number is already in ascending order
    while (removed < k) {
        stack.pop();
        removed++;
    }

    // Trim leading zeros
    let i = 0;
    while (i < stack.length && stack[i] === '0') {
        i++;
    }

    // Construct the result
    const result = stack.slice(i, stack.length - (k - removed)).join('');

    // If result is empty, return "0" as the smallest number
    return result || "0";
};