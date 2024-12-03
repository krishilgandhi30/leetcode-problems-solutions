/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
    // Create an array from the string to manipulate it easier
    let result = [];
    let spaceIndex = 0; // To keep track of spaces inserted

    // Iterate over each character in the string
    for (let i = 0; i < s.length; i++) {
        // If the current index matches a space position, insert a space
        if (spaceIndex < spaces.length && i === spaces[spaceIndex]) {
            result.push(' ');
            spaceIndex++;
        }
        // Add the current character to the result array
        result.push(s[i]);
    }

    // Join the result array into a string and return it
    return result.join('');
};