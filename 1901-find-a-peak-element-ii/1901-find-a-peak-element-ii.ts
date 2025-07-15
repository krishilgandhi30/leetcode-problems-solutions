/*
Perform binary search on columns.

For the middle column:

Find the global maximum element in this column.

Check if it’s a peak by comparing with neighbors left and right.

If the left neighbor is greater, move search space to the left half.

Else if the right neighbor is greater, move search space to the right half.

Else this is a peak — return its position. 
*/
function findPeakGrid(mat: number[][]): number[] {
    const m = mat.length;
    const n = mat[0].length;

    let left = 0;
    let right = n - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        // Find row with max element in mid column
        let maxRow = 0;
        for (let i = 1; i < m; i++) {
            if (mat[i][mid] > mat[maxRow][mid]) {
                maxRow = i;
            }
        }

        // Values of left and right neighbors, consider -1 if out of bounds (perimeter)
        const leftVal = mid - 1 >= 0 ? mat[maxRow][mid - 1] : -1;
        const rightVal = mid + 1 < n ? mat[maxRow][mid + 1] : -1;
        const midVal = mat[maxRow][mid];

        // Check if peak
        if (midVal > leftVal && midVal > rightVal) {
            return [maxRow, mid];
        } else if (leftVal > midVal) {
            // Move search to left side
            right = mid - 1;
        } else {
            // Move search to right side
            left = mid + 1;
        }
    }

    // Fallback, though per problem statement, peak always exists.
    return [-1, -1];
};