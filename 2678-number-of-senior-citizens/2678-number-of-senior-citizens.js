/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    let count = 0;

    // Iterate over each passenger detail string
    for (let detail of details) {
        // Extract age from the 11th and 12th characters (0-indexed positions 10 and 11)
        let age = parseInt(detail.substring(11, 13), 10);
        console.log("Age:::::::::", age)

        // Check if the age is greater than 60
        if (age > 60) {
            count++;
        }
    }

    return count;
};