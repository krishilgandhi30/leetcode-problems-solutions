function furthestDistanceFromOrigin(moves: string): number {
    let lCount = 0;
    let rCount = 0;
    let underscoreCount = 0;

    for (const char of moves) {
        if (char === 'L') {
            lCount++;
        } else if (char === 'R') {
            rCount++;
        } else {
            underscoreCount++;
        }
    }

    // The furthest point is the absolute difference between L and R, 
    // plus all the flexible moves (_) added to the larger side.
    return Math.abs(lCount - rCount) + underscoreCount;
};