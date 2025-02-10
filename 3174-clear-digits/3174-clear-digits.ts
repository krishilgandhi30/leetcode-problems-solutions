function clearDigits(s: string): string {
    let result = s.split(""); // Convert the string to an array for easy manipulation

    let i = 0;
    while (i < result.length) {
        if (/\d/.test(result[i])) { // Check if the current character is a digit
            // Remove the current digit and the closest non-digit character to its left
            result.splice(i - 1, 2);
            // After removing, move back one step to recheck the updated string
            i = Math.max(i - 1, 0);
        } else {
            // If not a digit, just move to the next character
            i++;
        }
    }

    return result.join(""); // Convert the array back to a string and return 
};