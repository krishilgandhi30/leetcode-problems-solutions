/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    // Find the index of the first occurrence of the character
    const index = word.indexOf(ch);
    
    // If the character is not found, return the original word
    if (index === -1) {
        return word;
    }
    
    // Reverse the substring from the beginning to the index
    const reversedSubstring = word.substring(0, index + 1).split('').reverse().join('');
    
    // Concatenate the reversed substring with the rest of the word
    return reversedSubstring + word.substring(index + 1);
};