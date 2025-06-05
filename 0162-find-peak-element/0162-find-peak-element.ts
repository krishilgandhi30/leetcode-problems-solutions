/*
Note: At the start of the algorithm, we address the edge cases of identifying the peak element without requiring separate conditions during the check for arr[mid] inside the loop. And the search space will be from index 1 to n-2 as indices 0 and n-1 have already been checked in the edge cases.

The final steps will be as follows:

If n == 1: This means the array size is 1. If the array contains only one element, we will return that index i.e. 0.
If arr[0] > arr[1]: This means the very first element of the array is the peak element. So, we will return the index 0.
If arr[n-1] > arr[n-2]: This means the last element of the array is the peak element. So, we will return the index n-1.
Place the 2 pointers i.e. low and high: Initially, we will place the pointers excluding index 0 and n-1 like this: low will point to index 1, and high will point to index n-2 i.e. the second last index.
Calculate the ‘mid’: Now, inside a loop, we will calculate the value of ‘mid’ using the following formula:
mid = (low+high) // 2 ( ‘//’ refers to integer division)
Check if arr[mid] is the peak element:
If arr[mid] > arr[mid-1] and arr[mid] > arr[mid+1]: If this condition is true for arr[mid], we can conclude arr[mid] is the peak element. We will return the index ‘mid’.
If arr[mid] > arr[mid-1]: This means we are in the left half and we should eliminate it as our peak element appears on the right. So, we will do this:
low = mid+1.
Otherwise, we are in the right half and we should eliminate it as our peak element appears on the left. So, we will do this: high = mid-1. This case also handles the case for the index ‘mid’ being a common point of a decreasing and increasing sequence. It will consider the left peak and eliminate the right peak.
The steps from 5 to 8 will be inside a loop and the loop will continue until low crosses high.
*/
function findPeakElement(nums: number[]): number {
    let n = nums.length; // Size of the array

    // Edge cases:
    if (n === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[n - 1] > nums[n - 2]) return n - 1;

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If nums[mid] is the peak:
        if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1])
            return mid;

        // If we are in the left:
        if (nums[mid] > nums[mid - 1]) low = mid + 1;

        // If we are in the right:
        // Or, nums[mid] is a common point:
        else high = mid - 1;
    }
    // Dummy return statement
    return -1;
};