function numberOfSubarrays(nums: number[], k: number): number {
    return atMost(nums, k) - atMost(nums, k - 1);
};

function atMost(nums: number[], k: number): number {
    let left = 0, count = 0, oddCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] % 2 === 1) {
            k--;
        }

        while (k < 0) {
            if (nums[left] % 2 === 1) {
                k++;
            }
            left++;
        }

        count += right - left + 1;
    }

    return count;
}