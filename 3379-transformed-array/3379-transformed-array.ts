function constructTransformedArray(nums: number[]): number[] {
    const n = nums.length;
    const result = new Array<number>(n);

    for (let i = 0; i < n; i++) {
        const move = nums[i];

        if (move === 0) {
            result[i] = 0;
        } else {
            // Normalize movement using modulo
            const nextIndex = ((i + move) % n + n) % n;
            result[i] = nums[nextIndex];
        }
    }

    return result;
};