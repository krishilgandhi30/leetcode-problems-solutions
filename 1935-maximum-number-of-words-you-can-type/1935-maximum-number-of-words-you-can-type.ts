function canBeTypedWords(text: string, brokenLetters: string): number {
    const brokenSet = new Set(brokenLetters);
    let count = 0;
    let wordStart = 0;

    for (let i = 0; i <= text.length; i++) {
        // At the end of each word or text, check if it can be typed
        if (i === text.length || text[i] === ' ') {
            let canType = true;
            for (let j = wordStart; j < i; j++) {
                if (brokenSet.has(text[j])) {
                    canType = false;
                    break;
                }
            }
            if (canType) count++;
            wordStart = i + 1; // move to next word start
        }
    }

    return count;
};