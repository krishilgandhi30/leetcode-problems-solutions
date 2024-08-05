/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
    // Step 1: Count occurrences of each string
    const counts = {};
    arr.forEach(str => {
        counts[str] = (counts[str] || 0) + 1;
    });

    // Step 2: Collect distinct strings in their order of appearance
    const distinctStrings = [];
    arr.forEach(str => {
        if (counts[str] === 1 && !distinctStrings.includes(str)) {
            distinctStrings.push(str);
        }
    });

    // Step 3: Return the k-th distinct string
    if (k <= distinctStrings.length) {
        return distinctStrings[k - 1];
    } else {
        return "";
    }
};