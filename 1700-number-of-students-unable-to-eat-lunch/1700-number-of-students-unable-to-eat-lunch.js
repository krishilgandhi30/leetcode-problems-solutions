/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
//     let queue = students.slice(); // Create a copy of students array to simulate a queue
//     console.log("Queue:", queue)
    
//     while (queue.length > 0) {
//         console.log("Queue at 0th index:", queue[0])
//         if (queue[0] === sandwiches[0]) {
//             queue.shift(); // If the student's preference matches the available sandwich, they take it
//             sandwiches.shift(); // Remove the sandwich from the available sandwiches
//         } else {
//             queue.push(queue.shift()); // If not, move the student to the end of the queue
//         }
//     }
    
//     return sandwiches.length; // Return the number of sandwiches left, if any
     let count = [0, 0]; // Initialize count array to track the number of students who prefer each type of sandwich

    // Count the number of students who prefer each type of sandwich
    for (let student of students) {
        count[student]++;
    }

    // Process the sandwiches
    for (let sandwich of sandwiches) {
        if (count[sandwich] === 0) {
            break; // If there are no more students who prefer this type of sandwich, stop processing
        }

        count[sandwich]--; // Serve the sandwich to a student who prefers it
    }

    return count.reduce((sum, currentCount) => sum + currentCount, 0); // Return the sum of remaining sandwiches
};