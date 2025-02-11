function removeOccurrences(s: string, part: string): string {
    // Loop until no occurrences of 'part' are left in 's'
    while (s.includes(part)) {
        // Remove the first occurrence of 'part'
        s = s.replace(part, '');
    }
    return s;
};