function numberOfSubstrings(s: string): number {
    let n = s.length;
    let count = { a: 0, b: 0, c: 0 }; // track occurrences
    let left = 0;
    let result = 0;

    for (let right = 0; right < n; right++) {
        // include current character in window
        count[s[right] as 'a' | 'b' | 'c']++;

        // shrink from left until the window loses a valid char
        while (count.a > 0 && count.b > 0 && count.c > 0) {
            // ✅ All three present → substrings from left...n-1 with current right are valid
            result += (n - right);

            // move left pointer to shrink window
            count[s[left] as 'a' | 'b' | 'c']--;
            left++;
        }
    }
    return result;
};