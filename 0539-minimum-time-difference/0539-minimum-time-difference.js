/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const toMinutes = time => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const minutesArray = timePoints.map(toMinutes).sort((a, b) => a - b);

    let minDifference = Infinity;

    // Check differences between consecutive time points
    for (let i = 0; i < minutesArray.length - 1; i++) {
        const diff = minutesArray[i + 1] - minutesArray[i];
        minDifference = Math.min(minDifference, diff);
    }

    // Also check the wrap-around difference between the last and first time point
    const wrapAroundDiff = (1440 - minutesArray[minutesArray.length - 1] + minutesArray[0]);
    minDifference = Math.min(minDifference, wrapAroundDiff);

    return minDifference;
};