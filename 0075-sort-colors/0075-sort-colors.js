/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let i = 0;

    while (i <= high) {
        if (nums[i] === 0) {
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
            i++;
        } else if (nums[i] === 2) {
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
        } else {
            i++;
        }
    }
};