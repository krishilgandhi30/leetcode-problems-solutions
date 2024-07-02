/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // Step 1: Count frequencies of each number in nums1
    const countMap = {};
    for (let num of nums1) {
        if (countMap[num] === undefined) {
            countMap[num] = 1;
        } else {
            countMap[num]++;
        }
    }
    
    // Step 2: Find intersection respecting frequencies
    const intersection = [];
    for (let num of nums2) {
        if (countMap[num] > 0) {
            intersection.push(num);
            countMap[num]--;
        }
    }
    
    // Step 3: Return the result array
    return intersection;
};