function findMin(nums: number[]): number {
    let low = 0;
    let high = nums.length - 1;
    let ans = Infinity;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[low] === nums[mid] && nums[high] === nums[mid]) {
            ans = Math.min(ans, nums[low]);
            low = low + 1;
            high = high - 1
            continue;
        } else if (nums[low] < nums[high]) {
            ans = Math.min(ans, nums[low]);
            break;
        } else if (nums[low] <= nums[mid]) {
            // Check the left part
            ans = Math.min(ans, nums[low]); // Keep the minimum:
            low = mid + 1
        } else {
            // check right part
            ans = Math.min(ans, nums[mid])
            high = mid - 1
        }
    }
    return ans;
};