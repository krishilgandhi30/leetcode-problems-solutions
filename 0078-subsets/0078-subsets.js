/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];

    const backtrack = (startIndex, currentSubset) => {

        result.push([...currentSubset]); // Add a copy of currentSubset to result
        // Iterate through remaining elements
        for (let i = startIndex; i < nums.length; i++) {
            currentSubset.push(nums[i]); // Include the current element

            backtrack(i + 1, currentSubset); // Recur with the next index
            currentSubset.pop(); // Backtrack: Remove the current element

        }
    };

    backtrack(0, []); // Start with an empty subset
    return result;
};