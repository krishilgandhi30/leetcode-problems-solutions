function canPartition(nums: number[]): boolean {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);

    // If total sum is odd, we cannot split it into two equal subsets
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;

    // Initialize DP array where dp[i] means if sum i is possible
    const dp = new Array(target + 1).fill(false);
    dp[0] = true; // We can always make a sum of 0 with no elements

    // Iterate over each number in the array
    for (const num of nums) {
        // Traverse backwards to avoid using the same element twice
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[target];
};