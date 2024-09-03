/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    // Helper function to convert a letter to its corresponding position in the alphabet
    function charToNumber(c) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    // Helper function to sum the digits of a number
    function sumOfDigits(num) {
        return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    // Step 1: Convert the string to a number based on letter positions
    let number = s.split('').map(charToNumber).join('');

    // Step 2: Perform the transformation k times
    for (let i = 0; i < k; i++) {
        number = sumOfDigits(number);
    }

    return number;
};