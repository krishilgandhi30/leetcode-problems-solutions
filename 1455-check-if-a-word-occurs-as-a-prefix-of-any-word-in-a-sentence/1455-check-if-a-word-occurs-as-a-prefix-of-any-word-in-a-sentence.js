/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Iterate over each word in the sentence
    for (let i = 0; i < words.length; i++) {
        // Check if searchWord is a prefix of the current word
        if (words[i].startsWith(searchWord)) {
            // Return the 1-indexed position
            return i + 1;
        }
    }

    // If no word starts with searchWord, return -1
    return -1;
};