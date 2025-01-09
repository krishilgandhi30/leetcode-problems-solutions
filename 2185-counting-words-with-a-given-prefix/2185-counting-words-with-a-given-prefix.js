/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
    let count = 0;

    // Iterate through each word in the words array
    for (let word of words) {
        // Check if the word starts with the given prefix
        if (word.startsWith(pref)) {
            count++;
        }
    }

    // Return the count of words with the given prefix
    return count;
};