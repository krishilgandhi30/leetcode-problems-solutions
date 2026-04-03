function isUgly(n: number): boolean {
    // 1. Base case: Ugly numbers must be positive
    if (n <= 0) return false;

    // 2. Factors to check
    const factors = [2, 3, 5];

    // 3. Repeatedly divide by each prime factor
    for (const factor of factors) {
        while (n % factor === 0) {
            n /= factor;
        }
    }

    // 4. If n is reduced to 1, it only had prime factors 2, 3, or 5
    return n === 1;
};