function findDays(weights, cap) {
    let days = 1; // First day.
    let load = 0;
    let n = weights.length; // size of array.
    for (let i = 0; i < n; i++) {
        if (load + weights[i] > cap) {
            days += 1; // move to next day.
            load = weights[i]; // load the weight.
        } else {
            // load the weight on the same day.
            load += weights[i];
        }
    }
    return days;
}

function shipWithinDays(weights: number[], days: number): number {
    // Find the maximum and the summation:
    let low = Math.max(...weights);
    let high = weights.reduce((sum, weight) => sum + weight, 0);
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let numberOfDays = findDays(weights, mid);
        if (numberOfDays <= days) {
            // eliminate right half.
            high = mid - 1;
        } else {
            // eliminate left half.
            low = mid + 1;
        }
    }
    return low;
};