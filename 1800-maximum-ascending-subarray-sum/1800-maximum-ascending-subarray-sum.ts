function maxAscendingSum(nums: number[]): number {
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        // If it's the first element or ascending
        if (i === 0 || nums[i] > nums[i - 1]) {
            currentSum += nums[i];
        } else {
            // If it's not ascending, reset current sum
            maxSum = Math.max(maxSum, currentSum);
            currentSum = nums[i];
        }
    }

    // After the loop ends, check the last subarray
    maxSum = Math.max(maxSum, currentSum);

    return maxSum;
};