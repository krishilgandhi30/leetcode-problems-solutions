/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let steps = 0;

    for (let log of logs) {
        if (log === '../') {
            steps = Math.max(0, steps - 1);
        } else if (log !== './') {
            steps++;
        }
    }

    return steps;
};