/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    // Helper function to check if a word starts and ends with a vowel
    function isValid(word) {
        const firstChar = word[0].toLowerCase();
        const lastChar = word[word.length - 1].toLowerCase();
        return vowels.has(firstChar) && vowels.has(lastChar);
    }
    
    // Create a prefix sum array
    const prefixSum = new Array(words.length).fill(0);
    
    // Fill the prefix sum array
    if (isValid(words[0])) {
        prefixSum[0] = 1;
    }
    for (let i = 1; i < words.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + (isValid(words[i]) ? 1 : 0);
    }
    
    // Process each query
    const result = [];
    for (const [l, r] of queries) {
        const count = prefixSum[r] - (l > 0 ? prefixSum[l - 1] : 0);
        result.push(count);
    }
    
    return result;
};