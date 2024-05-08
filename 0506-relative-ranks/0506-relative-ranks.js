/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sortedScores = score.slice().sort((a, b) => b - a);
    const medals = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    const result = [];
    for (let i = 0; i < score.length; i++) {
        const index = sortedScores.indexOf(score[i]);
        if (index < 3) {
            result.push(medals[index]);
        } else {
            result.push((index + 1).toString());
        }
    }

    return result;
};