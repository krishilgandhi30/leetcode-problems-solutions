/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    // Calculate the total chalk used in one complete round
    const totalChalk = chalk.reduce((acc, cur) => acc + cur, 0);

    // Reduce k by the number of complete rounds of chalk usage
    k %= totalChalk;

    // Iterate through the chalk array to find the student who will need to replace the chalk
    for (let i = 0; i < chalk.length; i++) {
        if (k < chalk[i]) {
            return i;  // This student will need to replace the chalk
        }
        k -= chalk[i];
    }

    // If not found, it means there was an issue, but logically it should never reach here
    return -1;
};