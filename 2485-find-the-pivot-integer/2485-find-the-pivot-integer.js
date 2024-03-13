/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    const sum = (n*(n+1) / 2);
    const pivot = Math.sqrt(sum);
    if (pivot % 1 !== 0) {
        return -1;
    } else {
        return Math.floor(pivot);
    }
};