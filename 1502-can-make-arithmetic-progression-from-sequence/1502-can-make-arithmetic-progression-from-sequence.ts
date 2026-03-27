function canMakeArithmeticProgression(arr: number[]): boolean {
    // 1. Sort the array in ascending order
    // Time Complexity: O(n log n)
    arr.sort((a, b) => a - b);

    // 2. Calculate the initial difference between the first two elements
    const diff = arr[1] - arr[0];

    // 3. Iterate through the rest of the array to check if the difference is consistent
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== diff) {
            return false;
        }
    }

    return true;
};