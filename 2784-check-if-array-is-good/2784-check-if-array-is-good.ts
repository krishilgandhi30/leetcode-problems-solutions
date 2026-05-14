function isGood(nums: number[]): boolean {
    const n = nums.length - 1;

    // Base case: n must be at least 1 (base[1] = [1, 1])
    if (n < 1) return false;

    // Use a frequency map/array to count occurrences
    const count = new Array(n + 1).fill(0);

    for (const num of nums) {
        // If any number is greater than n, it can't be a permutation of base[n]
        if (num > n) return false;
        count[num]++;
    }

    // Check occurrences for 1 to n-1 (should be exactly 1)
    for (let i = 1; i < n; i++) {
        if (count[i] !== 1) return false;
    }

    // Check occurrences for n (should be exactly 2)
    return count[n] === 2;
};