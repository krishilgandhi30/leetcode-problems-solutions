/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
    let changes = 0;

    // Traverse the string in pairs
    for (let i = 0; i < s.length; i += 2) {
        // Check the pair s[i] and s[i + 1]
        if (s[i] === s[i + 1]) {
            // No change needed if both characters are the same (either "00" or "11")
            continue;
        } else {
            // If they are different (i.e., "01" or "10"), we need one change
            changes++;
        }
    }

    return changes;
};