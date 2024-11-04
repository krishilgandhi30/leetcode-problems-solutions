/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
    let comp = '';
    let i = 0;

    while (i < word.length) {
        const char = word[i];
        let count = 0;

        // Count the maximum length of the prefix made of the same character
        while (i < word.length && word[i] === char && count < 9) {
            count++;
            i++;
        }

        // Append the count and character to the compressed string
        comp += count + char;
    }

    return comp;
};