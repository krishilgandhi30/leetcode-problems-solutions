function isPalindrome(x: number): boolean {
    // 1. Base cases: 
    // Negative numbers are not palindromes.
    // Numbers ending in 0 (except 0 itself) are not palindromes.
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversedHalf = 0;

    // 2. Build the reversed number until it reaches the middle
    while (x > reversedHalf) {
        const lastDigit = x % 10;
        reversedHalf = (reversedHalf * 10) + lastDigit;
        x = Math.floor(x / 10);
    }

    // 3. Comparison:
    // Even length: x === reversedHalf (e.g., 1221 -> x=12, reversedHalf=12)
    // Odd length: x === Math.floor(reversedHalf / 10) (e.g., 121 -> x=1, reversedHalf=12)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
};