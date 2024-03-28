/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let ans = 0;
    let start = -1;
    let frequency = new Map();
        
    for (let end = 0; end < nums.length; end++) {
        const num = nums[end];
        frequency.set(num, (frequency.has(num) ? frequency.get(num) : 0) + 1);
            
        while (frequency.get(num) > k) {
            start++;
            frequency.set(nums[start], frequency.get(nums[start]) - 1);
        }
            
        ans = Math.max(ans, end - start);
    }
        
    return ans;
};