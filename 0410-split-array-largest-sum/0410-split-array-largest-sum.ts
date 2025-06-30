/* 
Observations:

Minimum possible answer: We will get the minimum answer when we split the array into n subarrays(i.e. Each subarray will have a single element). Now, in this case, the maximum subarray sum will be the maximum element in the array. So, the minimum possible answer is max(arr[]).
Maximum possible answer: We will get the maximum answer when we put all n elements into a single subarray. The maximum subarray sum will be the summation of array elements i.e. sum(arr[]). So, the maximum possible answer is sum(arr[]).

From the observations, it is clear that our answer lies in the range [max(arr[]), sum(arr[])].

How to calculate the number of subarrays we need to make if the maximum subarray sum can be at most ‘maxSum’:

In order to calculate the number of subarrays we will write a function, countPartitions(). This function will take the array and ‘maxSum’ as parameters and return the number of partitions.

countPartitions(arr[], maxSum):

We will first declare two variables i.e. ‘partitions’(stores the no. of partitions), and ‘subarraySum’(stores the sum of the current subarray). As we are starting with the first subarray, ‘partitions’ should be initialized with 1.
We will start traversing the given array.
If subarraySum + arr[i] <= maxSum: If upon adding the current element with ‘subarraySum’ does not exceed ‘maxSum’, we can insert this i-th element to the current subarray.
Otherwise, we will move to the next subarray(i.e. partitions += 1 ) and insert the i-th element into that.

Algorithm:
Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to max(arr[]) and the high will point to sum(arr[]).
Calculate the ‘mid’: Now, inside the loop, we will calculate the value of ‘mid’ using the following formula:
mid = (low+high) // 2 ( ‘//’ refers to integer division)
Eliminate the halves based on the number of subarrays returned by countPartitions():
We will pass the potential value of ‘maxSum’, represented by the variable 'mid', to the ‘countPartitions()' function. This function will return the number of partitions we can make.
If partitions > k: On satisfying this condition, we can conclude that the number ‘mid’ is smaller than our answer. So, we will eliminate the left half and consider the right half(i.e. low = mid+1).
Otherwise, the value mid is one of the possible answers. But we want the minimum value. So, we will eliminate the right half and consider the left half(i.e. high = mid-1).
Finally, outside the loop, we will return the value of low as the pointer will be pointing to the answer.
*/
function countPartition(nums, maxSum) {
    let n = nums.length;
    let partition = 1
    let subArraySum = 0
    for (let i = 0; i < n; i++) {
        if (subArraySum + nums[i] <= maxSum) {
            // Insert element into current sub array
            subArraySum += nums[i];
        } else {
            // insert element into next sub array
            partition += 1;
            subArraySum = nums[i]
        }
    }
    return partition
}

function splitArray(nums: number[], k: number): number {
    let low = Math.max(...nums);
    let high = nums.reduce((a, b) => a + b, 0);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let partition = countPartition(nums, mid);
        if (partition > k) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return low;
};