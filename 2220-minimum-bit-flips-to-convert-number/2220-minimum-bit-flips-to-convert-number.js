/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
    // Compute the XOR of start and goal
    let xor = start ^ goal;

    // Count the number of 1s in the binary representation of xor
    let count = 0;
    while (xor > 0) {
        // Increment count for each 1 in the XOR result
        count += xor & 1;
        // Right shift xor to process the next bit
        xor >>= 1;
    }

    return count;
};