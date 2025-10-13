function removeAnagrams(words: string[]): string[] {
    const result: string[] = [];
    let prevSorted = ""; // This will hold the sorted form of the previous word

    for (let i = 0; i < words.length; i++) {
        const sortedWord = words[i].split('').sort().join(''); // Sort the current word
        if (sortedWord !== prevSorted) {
            result.push(words[i]); // Add the word to the result if it's not an anagram of the previous one
            prevSorted = sortedWord; // Update the previous sorted word
        }
    }

    return result;
};