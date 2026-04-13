function getMinDistance(nums: number[], target: number, start: number): number {
    let minDistance = Infinity;

    for (let i = 0; i < nums.length; i++) {
        // Only calculate distance if the current element is our target
        if (nums[i] === target) {
            const currentDistance = Math.abs(i - start);

            // Update minDistance if this one is smaller
            if (currentDistance < minDistance) {
                minDistance = currentDistance;
            }

            // Optimization: If distance is 0, we can't get any lower
            if (minDistance === 0) return 0;
        }
    }

    return minDistance;
};