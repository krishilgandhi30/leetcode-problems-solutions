function findErrorNums(nums: number[]): number[] {
    const n = nums.length;

    let sum = 0;
    let squareSum = 0;

    for (const num of nums) {
        sum += num;
        squareSum += num * num;
    }

    const expectedSum = (n * (n + 1)) / 2;
    const expectedSquareSum = (n * (n + 1) * (2 * n + 1)) / 6;

    const diff = sum - expectedSum; // duplicate - missing
    const squareDiff = squareSum - expectedSquareSum; // dup² - miss²

    const sumDupMiss = squareDiff / diff;

    const duplicate = (diff + sumDupMiss) / 2;
    const missing = duplicate - diff;

    return [duplicate, missing];
};