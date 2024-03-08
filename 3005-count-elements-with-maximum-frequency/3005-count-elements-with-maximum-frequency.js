/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freqMap = {};
    let maxFreq = 0;

    // Step 1: Calculate the frequencies of each element
    nums.forEach(num => {
        freqMap[num] = (freqMap[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, freqMap[num]);
    });

    // Step 2: Count the number of elements with maximum frequency
    let count = 0;
    for (let key in freqMap) {
        if (freqMap[key] === maxFreq) {
            count += maxFreq;
        }
    }

    // Step 3: Return the total count of elements with maximum frequency
    return count;
};