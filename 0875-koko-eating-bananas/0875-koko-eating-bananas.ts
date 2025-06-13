function calculateTotalHours(v, hourly) {
    let totalH = 0;
    let n = v.length;
    // Find total hours
    for (let i = 0; i < n; i++) {
        totalH += Math.ceil(v[i] / hourly);
    }
    return totalH;
}

function minEatingSpeed(piles: number[], h: number): number {
    let low = 1;
    let high = Math.max(...piles);

    // Apply binary search
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        console.log("Mid:::::::", mid)
        let totalH = calculateTotalHours(piles, mid);
        console.log("Total Hour::", totalH)
        if (totalH <= h) {
            high = mid - 1;
            console.log("High:::::::::", high)
        } else {
            low = mid + 1;
            console.log("Low::::::", low)
        }
    }
    return low;
};