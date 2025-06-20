/*
Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to index 0 and the high will point to index n-1 i.e. the last index.
Calculate the ‘mid’: Now, inside the loop, we will calculate the value of ‘mid’ using the following formula:
mid = (low+high) // 2 ( ‘//’ refers to integer division)
Eliminate the halves based on the number of missing numbers up to index ‘mid’:
We will calculate the number of missing numbers using the above-said formula like this: missing_numbers = vec[mid] - (mid+1).
If missing_numbers < k: On satisfying this condition, we can conclude that we are currently at a smaller index. But we want a larger index. So, we will eliminate the left half and consider the right half(i.e. low = mid+1).
Otherwise, we have to consider smaller indices. So, we will eliminate the right half and consider the left half(i.e. high = mid-1).
Finally, when we are outside the loop, we will return the value of (k+high+1) i.e. the kth missing number.
*/
function findKthPositive(arr: number[], k: number): number {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let missing = arr[mid] - (mid + 1);
        if (missing < k) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return k + high + 1;
};