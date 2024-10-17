/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    const numStr = num.toString();
    const lastIndex = new Array(10).fill(-1);

    // Record the last occurrence of each digit
    for (let i = 0; i < numStr.length; i++) {
        lastIndex[numStr[i]] = i;
    }

    // Try to find the first digit that can be swapped to get a larger number
    for (let i = 0; i < numStr.length; i++) {
        for (let d = 9; d > numStr[i]; d--) {
            if (lastIndex[d] > i) {
                // Swap the digits
                const numArray = numStr.split('');
                [numArray[i], numArray[lastIndex[d]]] = [numArray[lastIndex[d]], numArray[i]];
                return parseInt(numArray.join(''));
            }
        }
    }

    return num; // Return the original number if no swap is found
};