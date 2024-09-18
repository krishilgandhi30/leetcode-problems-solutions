/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    // Convert numbers to strings
    const strNums = nums.map(num => num.toString());

    // Custom sorting function
    strNums.sort((a, b) => {
        // Compare concatenated results
        return (b + a).localeCompare(a + b);
    });

    // Join the sorted numbers
    const largestNum = strNums.join('');

    // Handle case where the result is leading zeros
    return largestNum[0] === '0' ? '0' : largestNum;
};