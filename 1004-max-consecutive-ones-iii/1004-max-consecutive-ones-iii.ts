function longestOnes(nums: number[], k: number): number {
    let l = 0;
    let ans = 0;
    let count = 0;

    // Only one loop to traverse through the array
    for (let r = 0; r < nums.length; r++) {
        // Expand the window by including nums[r]
        if (nums[r] === 0) {
            count++;
        }

        // If the count of zeros exceeds k, shrink the window from the left
        if (count > k) {
            if (nums[l] === 0) {
                count--;
            }
            l++;  // Shrink the window by moving left pointer
        }

        // Update the answer with the maximum length of the valid window
        // console.log("Before Ans:", ans, r, l, count)
        ans = Math.max(ans, r - l + 1);
        // console.log("After Ans:", ans)
    }

    return ans;
};