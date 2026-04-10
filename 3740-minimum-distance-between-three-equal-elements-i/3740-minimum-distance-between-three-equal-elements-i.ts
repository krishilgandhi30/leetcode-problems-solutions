function minimumDistance(nums: number[]): number {
    const n = nums.length;
    // Map to store all indices for each unique number
    const indexMap: Map<number, number[]> = new Map();

    // 1. Group indices by their values
    for (let i = 0; i < n; i++) {
        if (!indexMap.has(nums[i])) {
            indexMap.set(nums[i], []);
        }
        indexMap.get(nums[i])!.push(i);
    }

    let minTotalDistance = Infinity;

    // 2. Iterate through each group of indices
    for (const indices of indexMap.values()) {
        // We need at least 3 occurrences to form a tuple
        if (indices.length < 3) continue;

        // 3. Check consecutive triplets (i, i+1, i+2)
        // because they will always yield the smallest (k - i)
        for (let m = 0; m <= indices.length - 3; m++) {
            const i = indices[m];
            const k = indices[m + 2];

            // Formula simplifies to 2 * (max_index - min_index)
            const currentDistance = 2 * (k - i);

            if (currentDistance < minTotalDistance) {
                minTotalDistance = currentDistance;
            }
        }
    }

    return minTotalDistance === Infinity ? -1 : minTotalDistance;
};