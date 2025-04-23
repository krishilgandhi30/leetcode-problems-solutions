function countLargestGroup(n: number): number {
    const groupCount: Record<number, number> = {};

    // Group numbers by the sum of their digits
    for (let i = 1; i <= n; i++) {
        const digitSum = i.toString().split('').reduce((sum, digit) => sum + +digit, 0);
        groupCount[digitSum] = (groupCount[digitSum] || 0) + 1;
    }

    // Find the maximum group size
    const maxSize = Math.max(...Object.values(groupCount));

    // Count how many groups have the maximum size
    return Object.values(groupCount).filter(count => count === maxSize).length;
};