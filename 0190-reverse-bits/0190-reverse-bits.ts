function reverseBits(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1); // Add last bit of n to result
        n >>>= 1; // Unsigned right shift
    }

    return result >>> 0; // Ensure unsigned 32-bit result
};