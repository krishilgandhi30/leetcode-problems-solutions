function minMoves(nums: number[], limit: number): number {
   let n = nums.length;
    // Difference array to store move changes for each possible sum S [2, 2 * limit]
    let diff = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {
        let a = nums[i];
        let b = nums[n - 1 - i];

        let minVal = Math.min(a, b);
        let maxVal = Math.max(a, b);

        // 1. Initially, assume 2 moves for all possible sums in [2, 2*limit]
        diff[2] += 2;
        diff[2 * limit + 1] -= 2;

        // 2. Range [minVal + 1, maxVal + limit] needs only 1 move
        // We subtract 1 from the 2-move assumption
        diff[minVal + 1] -= 1;
        diff[maxVal + limit + 1] += 1;

        // 3. The exact sum a + b needs 0 moves
        // We subtract 1 from the 1-move range
        diff[a + b] -= 1;
        diff[a + b + 1] += 1;
    }

    let minMoves = n; // Max possible moves is n
    let currentMoves = 0;

    // Sweep through the difference array to find the minimum
    for (let s = 2; s <= 2 * limit; s++) {
        currentMoves += diff[s];
        minMoves = Math.min(minMoves, currentMoves);
    }

    return minMoves; 
};