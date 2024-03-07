/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    // return Object.keys(obj).length === 0 // complexity O(n)
    for (const _ in obj) return false; // complexity O(1)
    return true;
}; 