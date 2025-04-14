function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    let count = 0;
    const n = arr.length;

    for (let j = 1; j < n - 1; j++) {
        for (let i = 0; i < j; i++) {
            if (Math.abs(arr[i] - arr[j]) <= a) {
                for (let k = j + 1; k < n; k++) {
                    if (
                        Math.abs(arr[j] - arr[k]) <= b &&
                        Math.abs(arr[i] - arr[k]) <= c
                    ) {
                        count++;
                    }
                }
            }
        }
    }

    return count;
};