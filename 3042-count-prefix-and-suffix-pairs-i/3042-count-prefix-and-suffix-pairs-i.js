/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function (words) {
    let count = 0;

    // Loop through each pair of words
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            // Check if words[i] is both a prefix and a suffix of words[j]
            if (isPrefixAndSuffix(words[i], words[j])) {
                count++;
            }
        }
    }

    return count;
};

function isPrefixAndSuffix(str1, str2) {
    // Check if str1 is both a prefix and a suffix of str2
    return str2.startsWith(str1) && str2.endsWith(str1);
}