/*
Algorithm:
The steps are as follows:

If n == 1: This means the array size is 1. If the array contains only one element, we will return that element only.
If arr[0] != arr[1]: This means the very first element of the array is the single element. So, we will return arr[0].
If arr[n-1] != arr[n-2]: This means the last element of the array is the single element. So, we will return arr[n-1].
Place the 2 pointers i.e. low and high: Initially, we will place the pointers excluding index 0 and n-1 like this: low will point to index 1, and high will point to index n-2 i.e. the second last index.
Calculate the ‘mid’: Now, inside a loop, we will calculate the value of ‘mid’ using the following formula:
mid = (low+high) // 2 ( ‘//’ refers to integer division)
Check if arr[mid] is the single element:
If arr[mid] != arr[mid-1] and arr[mid] != arr[mid+1]: If this condition is true for arr[mid], we can conclude arr[mid] is the single element. We will return arr[mid].
If (mid % 2 == 0 and arr[mid] == arr[mid+1])
or (mid%2 == 1 and arr[mid] == arr[mid-1]): This means we are in the left half and we should eliminate it as our single element appears on the right. So, we will do this:
low = mid+1.
Otherwise, we are in the right half and we should eliminate it as our single element appears on the left. So, we will do this: high = mid-1.
*/
function singleNonDuplicate(nums: number[]): number {
    const n = nums.length;

    // Edge cases:
    if (n === 1) return nums[0];
    if (nums[0] !== nums[1]) return nums[0];
    if (nums[n - 1] !== nums[n - 2]) return nums[n - 1];

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid]

        if ((mid % 2 === 1 && nums[mid] === nums[mid - 1]) ||
            (mid % 2 === 0 && nums[mid] === nums[mid + 1])) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    };

    return -1
}