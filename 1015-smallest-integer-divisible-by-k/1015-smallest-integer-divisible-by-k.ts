function smallestRepunitDivByK(k: number): number {
    // 1. Check for impossible cases: 
    // If k is even or divisible by 5, it cannot divide a number ending in 1.
    if (k % 2 === 0 || k % 5 === 0) {
        return -1;
    }

    let remainder = 0;

    // 2. Iterate from length 1 up to k
    for (let length = 1; length <= k; length++) {
        // Calculate the next remainder: (current * 10 + 1) % k
        remainder = (remainder * 10 + 1) % k;

        // 3. If remainder is 0, we found the smallest length
        if (remainder === 0) {
            return length;
        }
    }

    return -1;
}