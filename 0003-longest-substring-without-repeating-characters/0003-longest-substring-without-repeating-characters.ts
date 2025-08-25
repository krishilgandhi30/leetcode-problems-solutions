// https://takeuforward.org/data-structure/length-of-longest-substring-without-any-repeating-character/
function lengthOfLongestSubstring(s: string): number {
    let left = 0
    let right = 0
    let maxLength = 0;
    const mpp = new Array(256).fill(-1);  // Array to store last seen index of characters
    const n = s.length

    while (right < n) {
        const charCode = s.charCodeAt(right);
        if (mpp[charCode] !== -1) {
            left = Math.max(mpp[charCode] + 1, left);
        }

        mpp[charCode] = right;

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;

};