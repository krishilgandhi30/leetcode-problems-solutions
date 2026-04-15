function closestTarget(words: string[], target: string, startIndex: number): number {
    const n = words.length;
    let minDistance = Infinity;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            // Calculate absolute distance
            const absDist = Math.abs(i - startIndex);

            // Compare direct distance vs circular wrap-around distance
            const currentDist = Math.min(absDist, n - absDist);

            // Update global minimum
            if (currentDist < minDistance) {
                minDistance = currentDist;
            }
        }
    }

    // If minDistance was never updated, the target doesn't exist
    return minDistance === Infinity ? -1 : minDistance;
};