function areAlmostEqual(s1: string, s2: string): boolean {
    // If the strings are already equal, no swap is needed.
    if (s1 === s2) return true;

    // Initialize an array to track the indices where s1 and s2 differ.
    const diff: number[] = [];

    // Loop through the strings to find positions where they differ.
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
    }

    // If there are exactly two differences, check if swapping them makes the strings equal.
    if (diff.length === 2) {
        const [i, j] = diff;
        // Check if swapping s2[i] and s2[j] makes s1 equal to s2.
        return s1[i] === s2[j] && s1[j] === s2[i];
    }

    // If there are not exactly two differences, it's impossible to make the strings equal with one swap.
    return false;
};