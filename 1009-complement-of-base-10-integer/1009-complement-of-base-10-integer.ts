function bitwiseComplement(n: number): number {
    // Edge case: if n is 0, binary is "0", complement is "1"
    if (n === 0) return 1;

    let mask = 0;
    let temp = n;

    // Build a mask of 1s with the same bit-length as n
    while (temp > 0) {
        mask = (mask << 1) | 1;
        temp >>= 1;
    }

    // XOR the number with the mask to flip all bits
    return n ^ mask;
};