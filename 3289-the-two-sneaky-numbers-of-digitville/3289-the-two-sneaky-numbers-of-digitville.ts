function getSneakyNumbers(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        const val = nums[i] % n; // restore original number if modified
        nums[val] += n;
    }

    for (let i = 0; i < n; i++) {
        if (Math.floor(nums[i] / n) > 1) {
            result.push(i);
        }
    }

    return result;
};