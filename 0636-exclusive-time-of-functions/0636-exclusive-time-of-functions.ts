function exclusiveTime(n: number, logs: string[]): number[] {
    const res: number[] = new Array(n).fill(0); // To store exclusive time for each function
    const stack: number[] = []; // Stack to keep track of function calls
    let prevTime = 0; // To track the timestamp of the previous log

    for (const log of logs) {
        const [idStr, type, timeStr] = log.split(":");
        const id = parseInt(idStr);
        const time = parseInt(timeStr);

        if (type === "start") {
            // If a function starts, push it to the stack
            if (stack.length > 0) {
                // The current function is already running, so add its time spent
                res[stack[stack.length - 1]] += time - prevTime;
            }
            stack.push(id); // Push the current function to the stack
            prevTime = time; // Update previous time to current time
        } else { // type === "end"
            // If a function ends, pop it from the stack
            res[id] += time - prevTime + 1; // Include the time spent on this function
            stack.pop(); // Pop the function from the stack
            prevTime = time + 1; // Update previous time to the next timestamp
        }
    }

    return res;
}
