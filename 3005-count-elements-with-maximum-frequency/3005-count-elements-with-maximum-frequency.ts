function maxFrequencyElements(nums: number[]): number {
    const freqMap: Map<number, number> = new Map();

    // Step 1: Count the frequencies of each element
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Find the maximum frequency
    let maxFreq = 0;
    for (const freq of freqMap.values()) {
        maxFreq = Math.max(maxFreq, freq);
    }

    // Step 3: Count how many elements have the maximum frequency
    let totalCount = 0;
    for (const freq of freqMap.values()) {
        if (freq === maxFreq) {
            totalCount += freq;
        }
    }

    return totalCount;
};