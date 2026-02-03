function isTrionic(nums: number[]): boolean {
    const n = nums.length;
    if (n < 4) return false; // need at least 4 elements

    let i = 0;

    // 1️⃣ strictly increasing
    while (i + 1 < n && nums[i] < nums[i + 1]) {
        i++;
    }
    if (i === 0) return false; // no increasing part

    // 2️⃣ strictly decreasing
    let p = i;
    while (i + 1 < n && nums[i] > nums[i + 1]) {
        i++;
    }
    if (i === p) return false; // no decreasing part

    // 3️⃣ strictly increasing again
    let q = i;
    while (i + 1 < n && nums[i] < nums[i + 1]) {
        i++;
    }
    if (i === q) return false; // no final increasing part

    // must end exactly at the last index
    return i === n - 1;
}
