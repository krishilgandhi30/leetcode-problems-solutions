function differenceOfSums(n: number, m: number): number {
    // Total sum from 1 to n: n * (n + 1) / 2
    const totalSum = (n * (n + 1)) / 2;

    // Count of numbers divisible by m in [1, n]
    const countDivisible = Math.floor(n / m);

    // Sum of numbers divisible by m using arithmetic progression formula:
    // m + 2m + ... + countDivisible * m = m * (1 + 2 + ... + countDivisible)
    // = m * (countDivisible * (countDivisible + 1)) / 2
    const sumDivisible = m * (countDivisible * (countDivisible + 1)) / 2;

    // num1 = total sum - sumDivisible
    // num2 = sumDivisible
    return totalSum - 2 * sumDivisible;
};