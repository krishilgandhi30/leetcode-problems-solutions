function replaceNonCoprimes(nums: number[]): number[] {
    const stack: number[] = [];

    for (let num of nums) {
        while (stack.length > 0) {
            const top = stack[stack.length - 1];
            const g = gcd(top, num);

            if (g === 1) {
                // Coprime, no merge
                break;
            }

            // Non-coprime, merge
            stack.pop();
            num = lcm(top, num);
        }
        stack.push(num);
    }

    return stack;
};

function gcd(a: number, b: number): number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function lcm(a: number, b: number): number {
    return (a / gcd(a, b)) * b;
}