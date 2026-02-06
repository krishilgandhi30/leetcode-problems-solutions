function minRemoval(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let left = 0;
    let maxLen = 1;

    for (let right = 0; right < nums.length; right++) {
        // Shrink window until it's balanced
        while (nums[right] > nums[left] * k) {
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return nums.length - maxLen;
};