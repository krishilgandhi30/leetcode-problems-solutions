/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Function to count the number of valid pairs (i, j) where nums[i] + nums[j] <= target
    function countPairsWithSumLessThanOrEqual(target) {
        let count = 0;
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            if (nums[left] + nums[right] <= target) {
                // If nums[left] + nums[right] <= target, all pairs (left, left+1), (left, left+2), ..., (left, right-1) are valid
                count += (right - left);
                left++;
            } else {
                right--;
            }
        }

        return count;
    }

    // Step 3: Count pairs where nums[i] + nums[j] <= upper and nums[i] + nums[j] < lower
    return countPairsWithSumLessThanOrEqual(upper) - countPairsWithSumLessThanOrEqual(lower - 1);
};