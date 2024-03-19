/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
        let freq = new Array(26).fill(0);
        let maxCount = 0;

        for (let task of tasks) {
            freq[task.charCodeAt(0) - 'A'.charCodeAt(0)] += 1;
            maxCount = Math.max(maxCount, freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]);
        }
    
        let time = (maxCount - 1) * (n + 1);
        for (let f of freq) {
            if (f === maxCount) {
                time += 1;
            }
        }

        return Math.max(tasks.length, time);
};