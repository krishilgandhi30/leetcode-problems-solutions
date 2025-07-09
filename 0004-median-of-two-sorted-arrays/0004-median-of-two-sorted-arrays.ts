/*
Algorithm:
First, we have to make sure that the arr1[] is the smaller array. If not by default, we will just swap the arrays. Our main goal is to consider the smaller array as arr1[].
Calculate the length of the left half: left = (n1+n2+1) / 2.
Place the 2 pointers i.e. low and high: Initially, we will place the pointers. The pointer low will point to 0 and the high will point to n1(i.e. The size of arr1[]).
Calculate the ‘mid1’ i.e. x and ‘mid2’ i.e. left-x: Now, inside the loop, we will calculate the value of ‘mid1’ using the following formula:
mid1 = (low+high) // 2 ( ‘//’ refers to integer division)
mid2 = left-mid1
Calculate l1, l2, r1, and r2: Generally,
l1 = arr1[mid1-1]
l2 = arr2[mid2-1]
r1 = arr1[mid1]
r2 = arr2[mid2]
The possible values of ‘mid1’ and ‘mid2’ might be 0 and n1 and n2 respectively. So, to handle these cases, we need to store some default values for these four variables. The default value for l1 and l2 will be INT_MIN and for r1 and r2, it will be INT_MAX.
Eliminate the halves based on the following conditions:
If l1 <= r2 && l2 <= r1: We have found the answer.
If (n1+n2) is odd: Return the median = max(l1, l2).
Otherwise: Return median = (max(l1, l2)+min(r1, r2)) / 2.0
If l1 > r2: This implies that we have considered more elements from arr1[] than necessary. So, we have to take less elements from arr1[] and more from arr2[]. In such a scenario, we should try smaller values of x. To achieve this, we will eliminate the right half (high = mid1-1).
If l2 > r1: This implies that we have considered more elements from arr2[] than necessary. So, we have to take less elements from arr2[] and more from arr1[]. In such a scenario, we should try bigger values of x. To achieve this, we will eliminate the left half (low = mid1+1).
Finally, outside the loop, we will include a dummy return statement just to avoid warnings or errors.
*/
function findMedianSortedArrays(a: number[], b: number[]): number {
    let n1 = a.length, n2 = b.length;
    // if n1 is bigger swap the arrays:
    if (n1 > n2) return findMedianSortedArrays(b, a);
    let n = n1 + n2; // total length
    let left = Math.floor((n1 + n2 + 1) / 2); // length of left half
    // apply binary search:
    let low = 0, high = n1;
    while (low <= high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = left - mid1;
        // calculate l1, l2, r1, and r2
        let l1 = Number.MIN_SAFE_INTEGER, l2 = Number.MIN_SAFE_INTEGER;
        let r1 = Number.MAX_SAFE_INTEGER, r2 = Number.MAX_SAFE_INTEGER;
        if (mid1 < n1) r1 = a[mid1];
        if (mid2 < n2) r2 = b[mid2];
        if (mid1 - 1 >= 0) l1 = a[mid1 - 1];
        if (mid2 - 1 >= 0) l2 = b[mid2 - 1];

        if (l1 <= r2 && l2 <= r1) {
            if (n % 2 === 1) return Math.max(l1, l2);
            else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
        }

        // eliminate the halves:
        else if (l1 > r2) high = mid1 - 1;
        else low = mid1 + 1;
    }
    return 0; // dummy statement
};