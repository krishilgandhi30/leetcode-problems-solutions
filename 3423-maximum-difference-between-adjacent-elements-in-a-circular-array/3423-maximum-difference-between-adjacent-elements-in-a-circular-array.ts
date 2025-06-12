function maxAdjacentDistance(nums: number[]): number {
    let maxDiff = 0;
    const n = nums.length;

    for (let i = 0; i < n; i++) {
        const nextIndex = (i + 1) % n; // wrap around to 0 if at the end
        const diff = Math.abs(nums[i] - nums[nextIndex]);
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff;
};