/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
// Sort the array and convert to a Set for fast lookups
    nums.sort((a, b) => a - b);
    const numSet = new Set(nums);
    let maxStreak = 0;

    // Iterate over the numbers
    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];
        let streakLength = 0; // start with no numbers in streak
        
        // Try to build a square streak
        while (numSet.has(currentNum)) {
            streakLength++;
            currentNum *= currentNum; // square the current number
            
            // Check if the next squared number exists
            if (!numSet.has(currentNum)) {
                break; // stop if the next squared number is not found
            }
        }
        
        // Update the maximum streak length if valid
        if (streakLength >= 2) {
            maxStreak = Math.max(maxStreak, streakLength);
        }
    }
    
    return maxStreak >= 2 ? maxStreak : -1; // return -1 if no streak found
};