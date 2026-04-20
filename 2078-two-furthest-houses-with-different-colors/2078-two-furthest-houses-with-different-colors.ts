function maxDistance(colors: number[]): number {
    const n = colors.length;
    let maxDist = 0;

    // Strategy 1: Compare the first house with others starting from the end
    for (let i = n - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            maxDist = Math.max(maxDist, i);
            break; // Found the furthest house from the left end
        }
    }

    // Strategy 2: Compare the last house with others starting from the beginning
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            maxDist = Math.max(maxDist, (n - 1) - i);
            break; // Found the furthest house from the right end
        }
    }

    return maxDist;
};