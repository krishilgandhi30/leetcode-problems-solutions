/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const charCount = new Array(26).fill(0); // Array to store character counts

    // Count occurrences of each character in string s
    for (let char of s) {
        charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let result = '';
    
    // Append characters in the order specified in the 'order' string
    for (let char of order) {
        let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
        while (charCount[index] > 0) {
            result += char;
            charCount[index]--;
        }
    }
    
    // Append remaining characters not in 'order'
    for (let i = 0; i < 26; i++) {
        while (charCount[i] > 0) {
            result += String.fromCharCode('a'.charCodeAt(0) + i);
            charCount[i]--;
        }
    }
    
    return result;
};