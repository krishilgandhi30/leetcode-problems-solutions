/* 
As we are starting from the cell (0, m-1), the two variables i.e. ‘row’ and ‘col’ will point to 0 and m-1 respectively.
We will do the following steps until row < n and col >= 0(i.e. while(row < n && col >= 0)):
If matrix[row][col] == target: We have found the target and so we will return true.
If matrix[row][col] > target: We need the smaller elements to reach the target. But the column is in increasing order and so it contains only greater elements. So, we will eliminate the column by decreasing the current column value by 1(i.e. col--) and thus we will move row-wise.
If matrix[row][col] < target: In this case, We need the bigger elements to reach the target. But the row is in decreasing order and so it contains only smaller elements. So, we will eliminate the row by increasing the current row value by 1(i.e. row++) and thus we will move column-wise.
If we are outside the loop without getting any matching element, we will return false.
*/
function searchMatrix(matrix: number[][], target: number): boolean {
    let n = matrix.length;
    let m = matrix[0].length;
    let row = 0;
    let col = m - 1;

    // Traverse the matrix from (0, m-1):
    while (row < n && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) row++;
        else col--;
    }
    return false;
};