function pivotInteger(n: number): number {
    // 1. Calculate the total sum of 1 to n
    const totalSum = (n * (n + 1)) / 2;

    // 2. Find the square root of that sum
    const pivot = Math.sqrt(totalSum);

    // 3. If pivot is an integer, return it. Otherwise, return -1.
    // We check if it's an integer by comparing it to its floored version.
    return pivot % 1 === 0 ? pivot : -1;
};