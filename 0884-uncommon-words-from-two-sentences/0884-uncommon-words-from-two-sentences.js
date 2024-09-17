/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const count1 = new Map();
    const count2 = new Map();

    // Helper function to count words in a sentence and store in map
    function countWords(sentence, countMap) {
        const words = sentence.split(' ');
        for (const word of words) {
            countMap.set(word, (countMap.get(word) || 0) + 1);
        }
    }

    // Count words in both sentences
    countWords(s1, count1);
    countWords(s2, count2);

    // Find uncommon words
    const uncommon = [];

    // Check words in the first sentence
    for (const [word, freq] of count1.entries()) {
        if (freq === 1 && !count2.has(word)) {
            uncommon.push(word);
        }
    }

    // Check words in the second sentence
    for (const [word, freq] of count2.entries()) {
        if (freq === 1 && !count1.has(word)) {
            uncommon.push(word);
        }
    }

    return uncommon;
};