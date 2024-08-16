/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    if (arrays.length === 0) return 0;

    // Initialize the min and max values from the first array
    let minVal = arrays[0][0];
    let maxVal = arrays[0][arrays[0].length - 1];
    let maxDistance = 0;

    // Iterate through each array starting from the second array
    for (let i = 1; i < arrays.length; i++) {
        let currentMin = arrays[i][0];
        let currentMax = arrays[i][arrays[i].length - 1];

        // Calculate the distance using the global min and max
        maxDistance = Math.max(maxDistance, Math.abs(currentMax - minVal));
        maxDistance = Math.max(maxDistance, Math.abs(maxVal - currentMin));

        // Update the global min and max values
        minVal = Math.min(minVal, currentMin);
        maxVal = Math.max(maxVal, currentMax);
    }

    return maxDistance;
};
