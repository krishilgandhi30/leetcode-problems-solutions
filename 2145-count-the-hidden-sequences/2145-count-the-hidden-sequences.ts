function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let minPrefix = 0;
    let maxPrefix = 0;
    let current = 0;

    for (let diff of differences) {
        current += diff;
        minPrefix = Math.min(minPrefix, current);
        maxPrefix = Math.max(maxPrefix, current);
    }

    const minStart = lower - minPrefix;
    const maxStart = upper - maxPrefix;

    if (minStart > maxStart) return 0;
    return maxStart - minStart + 1;
};