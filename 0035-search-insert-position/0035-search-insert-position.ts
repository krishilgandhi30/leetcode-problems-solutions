function searchInsert(nums: number[], target: number): number {
    const numsLength = nums.length
    let high = numsLength - 1
    let low = 0

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            return mid
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }

    return low
};