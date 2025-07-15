function isValid(word: string): boolean {
    if (word.length < 3) return false;

    let hasVowel = false;
    let hasConsonant = false;

    // Vowels for quick lookup (both lowercase and uppercase)
    const vowels = new Set([
        'a', 'e', 'i', 'o', 'u',
        'A', 'E', 'I', 'O', 'U'
    ]);

    for (let i = 0; i < word.length; i++) {
        const c = word[i];

        const code = c.charCodeAt(0);

        // Check if digit (0-9)
        if (code >= 48 && code <= 57) {
            // digits are allowed, but not vowels or consonants, so continue
            continue;
        }

        // Check if uppercase letter (A-Z)
        if (code >= 65 && code <= 90) {
            if (vowels.has(c)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
            continue;
        }

        // Check if lowercase letter (a-z)
        if (code >= 97 && code <= 122) {
            if (vowels.has(c)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
            continue;
        }

        // If not digit or letter, invalid char
        return false;
    }

    return hasVowel && hasConsonant;
};