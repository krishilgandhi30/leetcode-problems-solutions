function divideArray(nums: number[]): boolean {
    const frequencyMap: Map<number, number> = new Map();

    // Count the frequency of each number
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Check if all frequencies are even
    for (const count of frequencyMap.values()) {
        if (count % 2 !== 0) {
            return false;
        }
    }

    return true;
};