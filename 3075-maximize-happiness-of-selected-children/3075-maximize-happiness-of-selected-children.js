/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
     // Sort in descending order
        happiness.sort((a, b) => b - a);

        let totalHappinessSum = 0;
        let turns = 0;

        // Calculate the maximum happiness sum
        for (let i = 0; i < k; i++) {
            // Adjust happiness and ensure it's not negative
            totalHappinessSum += Math.max(happiness[i] - turns, 0);

            // Increment turns for the next iteration
            turns++;
        }

        return totalHappinessSum;
};