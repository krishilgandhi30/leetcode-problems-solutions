function maxScore(cardPoints: number[], k: number): number {
    const n = cardPoints.length;
    const total = cardPoints.reduce((a, b) => a + b, 0);

    // Case 1: take all cards
    if (k === n) return total;

    // If k is small, use prefix+suffix approach (O(k))
    if (k <= n / 2) {
        let leftSum = 0;
        for (let i = 0; i < k; i++) {
            leftSum += cardPoints[i];
        }

        let maxScore = leftSum;
        let rightSum = 0;

        for (let i = 0; i < k; i++) {
            leftSum -= cardPoints[k - 1 - i];
            rightSum += cardPoints[n - 1 - i];
            maxScore = Math.max(maxScore, leftSum + rightSum);
        }

        return maxScore;
    }

    // If k is large, use sliding window (O(n-k))
    const windowSize = n - k;
    let windowSum = 0;
    for (let i = 0; i < windowSize; i++) {
        windowSum += cardPoints[i];
    }

    let minWindowSum = windowSum;
    for (let right = windowSize; right < n; right++) {
        windowSum += cardPoints[right] - cardPoints[right - windowSize];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }

    return total - minWindowSum;
};