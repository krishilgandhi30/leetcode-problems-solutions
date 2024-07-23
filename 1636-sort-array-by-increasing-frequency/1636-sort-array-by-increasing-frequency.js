/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    // Step 1: Count frequencies using a Map
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Step 2: Sort based on frequencies and values
    nums.sort((a, b) => {
        // Compare by frequency (ascending)
        if (freqMap.get(a) !== freqMap.get(b)) {
            return freqMap.get(a) - freqMap.get(b);
        }
        // If frequencies are the same, compare by value (descending)
        return b - a;
    });

    // Step 3: Return the sorted array
    return nums;
};