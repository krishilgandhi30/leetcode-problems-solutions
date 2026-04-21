function selfDividingNumbers(left: number, right: number): number[] {
    const result: number[] = [];

    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }

    return result;
};

function isSelfDividing(num: number): boolean {
    let temp = num;

    while (temp > 0) {
        const digit = temp % 10;

        // Rule 1: Cannot contain digit 0
        // Rule 2: Must be divisible by the digit
        if (digit === 0 || num % digit !== 0) {
            return false;
        }

        // Move to the next digit
        temp = Math.floor(temp / 10);
    }

    return true;
}