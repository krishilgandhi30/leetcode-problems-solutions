/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Step 1: Normalize the string - remove non-alphanumeric characters and convert to lowercase
    const normalizedStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Step 2: Check if the string is equal to its reverse
    const reversedStr = normalizedStr.split('').reverse().join('');

    return normalizedStr === reversedStr;
};