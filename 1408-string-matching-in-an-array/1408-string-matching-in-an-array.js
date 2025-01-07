/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let result = [];

    // Loop through each word in the words array
    for (let i = 0; i < words.length; i++) {
        // Check if the current word is a substring of any other word
        for (let j = 0; j < words.length; j++) {
            // Skip if it's the same word
            if (i !== j && words[j].includes(words[i])) {
                result.push(words[i]);
                break; // No need to check further once we found a match
            }
        }
    }

    return result;
};