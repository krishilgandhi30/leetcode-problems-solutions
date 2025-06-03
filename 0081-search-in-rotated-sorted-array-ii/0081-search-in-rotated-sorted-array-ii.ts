/*
Place the 2 pointers i.e. low and high: Initially, we will place the pointers like this: low will point to the first index, and high will point to the last index.
Calculate the ‘mid’: Now, inside a loop, we will calculate the value of ‘mid’ using the following formula:
mid = (low+high) // 2 ( ‘//’ refers to integer division)
Check if arr[mid] = target: If it is, return True.
Check if arr[low] = arr[mid] = arr[high]: If this condition is satisfied, we will just increment the low pointer and decrement the high pointer by one step. We will not perform the later steps until this condition is no longer satisfied. So, we will continue to the next iteration from this step.
Identify the sorted half, check where the target is located, and then eliminate one half accordingly:
If arr[low] <= arr[mid]: This condition ensures that the left part is sorted.
If arr[low] <= target && target <= arr[mid]: It signifies that the target is in this sorted half. So, we will eliminate the right half (high = mid-1).
Otherwise, the target does not exist in the sorted half. So, we will eliminate this left half by doing low = mid+1.
Otherwise, if the right half is sorted:
If arr[mid] <= target && target <= arr[high]: It signifies that the target is in this sorted right half. So, we will eliminate the left half (low = mid+1).
Otherwise, the target does not exist in this sorted half. So, we will eliminate this right half by doing high = mid-1.
Once, the ‘mid’ points to the target, we will return True.
This process will be inside a loop and the loop will continue until low crosses high. If no element is found, we will return False.
*/
function search(nums: number[], target: number): boolean {
    let low = 0;
    const numsLength = nums.length;
    let high = numsLength - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return true;
        } else if (nums[low] === nums[mid] && nums[mid] === nums[high]) {
            //Edge case:
            low = low + 1;
            high = high - 1;
            continue;
        } else if (nums[low] <= nums[mid]) {
            // Check left part
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        } else {
            // Check right part
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return false;
};