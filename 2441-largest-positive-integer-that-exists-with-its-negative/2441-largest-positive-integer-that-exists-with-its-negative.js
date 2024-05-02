/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let ans = -1;

    for (let i of nums) {
        for (let j of nums) {
            // If there exists a number j such that i is the negative of j
            if (i === -j) {
                // Update the answer to the maximum of current ans and absolute value of i
                ans = Math.max(ans, Math.abs(i));
            }
        }
    }

    return ans;
};