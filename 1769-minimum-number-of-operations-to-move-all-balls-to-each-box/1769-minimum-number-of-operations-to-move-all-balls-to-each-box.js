/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    const n = boxes.length;
    const result = new Array(n).fill(0);

    // First pass: Calculate operations from left to right
    let leftOps = 0;  // Number of operations to move balls from the left
    let leftBalls = 0;  // Number of balls to the left of the current box
    for (let i = 1; i < n; i++) {
        if (boxes[i - 1] === '1') {
            leftBalls++;
        }
        leftOps += leftBalls;
        result[i] += leftOps;
    }

    // Second pass: Calculate operations from right to left
    let rightOps = 0;  // Number of operations to move balls from the right
    let rightBalls = 0;  // Number of balls to the right of the current box
    for (let i = n - 2; i >= 0; i--) {
        if (boxes[i + 1] === '1') {
            rightBalls++;
        }
        rightOps += rightBalls;
        result[i] += rightOps;
    }

    return result;
};