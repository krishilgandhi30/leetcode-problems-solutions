/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    const N = nums.length;
        
        const freq = new Array(N + 1).fill(0);
        for (const num of nums) {
            freq[Math.min(N, num)] += 1;
        }
        
        let numGreaterThanOrEqual = 0;
        for (let i = N; i > 0; i--) {
            numGreaterThanOrEqual += freq[i];
            if (i === numGreaterThanOrEqual) {
                return i;
            }
        }
        
        return -1;
};