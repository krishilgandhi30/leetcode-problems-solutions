/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function (nums) {
    const n = nums.length;
    const onesCount = nums.reduce((acc, val) => acc + val, 0);

    if (onesCount === 0) return 0; // If no `1`s, no swaps needed

    // Double the array to handle circular nature
    const doubledArray = nums.concat(nums);

    let currentOnesCount = 0;

    // Initialize the first window
    for (let i = 0; i < onesCount; i++) {
        if (doubledArray[i] === 1) {
            currentOnesCount++;
        }
    }

    let maxOnesInWindow = currentOnesCount;

    // Slide the window across the doubled array
    for (let i = onesCount; i < doubledArray.length; i++) {
        if (doubledArray[i] === 1) {
            currentOnesCount++;
        }
        if (doubledArray[i - onesCount] === 1) {
            currentOnesCount--;
        }
        maxOnesInWindow = Math.max(maxOnesInWindow, currentOnesCount);
    }

    return onesCount - maxOnesInWindow;
};