/*As given in the question, the array is already sorted

Whenever the word “sorted” or other similar terminologies are used in an array question, BINARY SEARCH can be one of the approaches.

Initially consider the start=0 and the end=n-1 pointers and the result as -1.

Till start does not crossover end pointer compare the mid element 
Find the last occurance:
- If the mid element is equal to the key value, store the mid-value in the result and move the start pointer to mid+1(move leftward)
- Else if the key value is less than the mid element then end= mid-1(move leftward)
- Else do start = mid+1 (move rightwards)*/ 
function findLastPositionValue(nums: number[], target: number, n: number) {
    let lastPosition = -1;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            lastPosition = mid;
            low = mid + 1
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return lastPosition
}

function findFirstPositionValue(nums: number[], target: number, n: number) {
    let firstPosition = -1;
    let low = 0;
    let high = n - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) {
            firstPosition = mid;
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return firstPosition
}

function searchRange(nums: number[], target: number): number[] {
    const numsLength = nums.length;
    const lastPosition = findLastPositionValue(nums, target, numsLength)
    const firstPosition = findFirstPositionValue(nums, target, numsLength)
    return [firstPosition, lastPosition]
};

