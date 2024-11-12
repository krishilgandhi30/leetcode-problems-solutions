/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    // Step 1: Sort the items array by price in ascending order
    items.sort((a, b) => a[0] - b[0]);

    // Step 2: Precompute the maximum beauty array
    let maxBeauty = [];
    let currentMaxBeauty = 0;

    for (let i = 0; i < items.length; i++) {
        // Keep track of the maximum beauty seen so far
        currentMaxBeauty = Math.max(currentMaxBeauty, items[i][1]);
        maxBeauty.push([items[i][0], currentMaxBeauty]);  // Store price and corresponding max beauty
    }

    // Step 3: Answer each query using binary search
    let result = [];

    for (let q of queries) {
        // Binary search to find the maximum price <= query
        let left = 0, right = maxBeauty.length - 1;
        let bestBeauty = 0;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (maxBeauty[mid][0] <= q) {
                bestBeauty = maxBeauty[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        result.push(bestBeauty);
    }

    return result;
};