/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    // Convert allowed string into a Set for quick look-up
    const allowedSet = new Set(allowed);

    // Initialize counter for consistent strings
    let count = 0;

    // Iterate through each word in the words array
    for (const word of words) {
        // Check if all characters in the word are in the allowedSet
        const isConsistent = [...word].every(char => allowedSet.has(char));

        // If consistent, increment the count
        if (isConsistent) {
            count++;
        }
    }

    return count;
};