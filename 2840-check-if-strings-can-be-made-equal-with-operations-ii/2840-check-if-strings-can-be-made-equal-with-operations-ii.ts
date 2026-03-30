function checkStrings(s1: string, s2: string): boolean {
    const n = s1.length;
    
    // Arrays to store character counts for even and odd positions
    // size 26 for lowercase English letters
    const evenCounts = new Array(26).fill(0);
    const oddCounts = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        const charCode1 = s1.charCodeAt(i) - 97; // 'a' is 97
        const charCode2 = s2.charCodeAt(i) - 97;

        if (i % 2 === 0) {
            // For even indices: increment for s1, decrement for s2
            evenCounts[charCode1]++;
            evenCounts[charCode2]--;
        } else {
            // For odd indices: increment for s1, decrement for s2
            oddCounts[charCode1]++;
            oddCounts[charCode2]--;
        }
    }

    // If both strings have the same character sets at even/odd positions,
    // all counts in our arrays must be exactly zero.
    for (let i = 0; i < 26; i++) {
        if (evenCounts[i] !== 0 || oddCounts[i] !== 0) {
            return false;
        }
    }

    return true;
}