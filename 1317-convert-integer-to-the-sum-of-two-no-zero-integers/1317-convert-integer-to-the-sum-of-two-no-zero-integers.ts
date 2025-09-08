function getNoZeroIntegers(n: number): number[] {
    for (let a = 1; a < n; a++) {
        let b = n - a;
        if (isNoZero(a) && isNoZero(b)) {
            return [a, b];
        }
    }
    // Problem guarantees at least one solution, so we never reach this
    throw new Error("No valid pair found");
};

function isNoZero(num: number): boolean {
    return !num.toString().includes('0');
}