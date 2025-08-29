function characterReplacement(s: string, k: number): number {
    // Frequency array for the characters in the current window
    const freq: number[] = new Array(26).fill(0);
    let left = 0;
    let maxCount = 0;  // the count of the most frequent character in the current window
    let maxLen = 0;  // the result variable to store the maximum length of a valid window

    for (let right = 0; right < s.length; right++) {
        // Convert the character to an index (0-25) and increment its count
        freq[s.charCodeAt(right) - 'A'.charCodeAt(0)]++;

        // Update the maxCount: max number of same characters in the current window
        maxCount = Math.max(maxCount, freq[s.charCodeAt(right) - 'A'.charCodeAt(0)]);

        // If the window size minus the count of the most frequent character exceeds k, shrink the window
        if (right - left + 1 - maxCount > k) {
            // Shrink the window by moving the left pointer
            freq[s.charCodeAt(left) - 'A'.charCodeAt(0)]--;
            left++;
        }

        // Calculate the maximum length of the valid window
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};