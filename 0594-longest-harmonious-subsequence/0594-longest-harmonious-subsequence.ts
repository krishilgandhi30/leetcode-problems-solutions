/* A subsequence means we can remove elements, but we can't change their order. */
function findLHS(nums: number[]): number {
    const freq: { [key: number]: number } = {};

    for (const num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let maxLen = 0;

    for (const key in freq) {
        const num = parseInt(key);
        if (freq.hasOwnProperty(num + 1)) {
            const len = freq[num] + freq[num + 1];
            if (len > maxLen) maxLen = len;
        }
    }

    return maxLen;
};