/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
    const remainderCount = new Array(k).fill(0);

    // Calculate remainders
    for (let num of arr) {
        const remainder = ((num % k) + k) % k; // handle negative numbers
        remainderCount[remainder]++;
    }

    // Check pairs for each remainder
    for (let i = 1; i < k; i++) {
        if (remainderCount[i] !== remainderCount[k - i]) {
            return false; // counts must match for pairs
        }
    }

    // Special case for remainder 0
    if (remainderCount[0] % 2 !== 0) {
        return false; // must have even counts for pairs
    }

    return true;
};