/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);

    if (k === 0) {
        // If k is 0, return an array of 0s
        return result;
    }

    // Handle positive k: sum of next k elements
    if (k > 0) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % n];  // Circular indexing
            }
            result[i] = sum;
        }
    }

    // Handle negative k: sum of previous |k| elements
    if (k < 0) {
        for (let i = 0; i < n; i++) {
            let sum = 0;
            for (let j = 1; j <= -k; j++) {
                sum += code[(i - j + n) % n];  // Circular indexing for negative k
            }
            result[i] = sum;
        }
    }

    return result;
};