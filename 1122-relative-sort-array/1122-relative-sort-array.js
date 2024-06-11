/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let maxElement = Math.max(...arr1);
        let count = new Array(maxElement + 1).fill(0);

        // Count occurrences of each element
        for (let element of arr1) {
            count[element]++;
        }

        // Add elements as per relative order
        let result = [];
        for (let value of arr2) {
            while (count[value] > 0) {
                result.push(value);
                count[value]--;
            }
        }

        // Add remaining elements in ascending order
        for (let num = 0; num <= maxElement; num++) {
            while (count[num] > 0) {
                result.push(num);
                count[num]--;
            }
        }

        return result;
};