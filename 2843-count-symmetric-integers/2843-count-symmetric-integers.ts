function countSymmetricIntegers(low: number, high: number): number {
    let count = 0;

    for (let num = low; num <= high; num++) {
        const strNum = num.toString();
        const len = strNum.length;

        if (len % 2 !== 0) continue; // Skip odd-digit numbers

        const mid = len / 2;
        const firstHalf = strNum.slice(0, mid);
        const secondHalf = strNum.slice(mid);

        const sumDigits = (s: string): number =>
            s.split('').reduce((acc, ch) => acc + parseInt(ch), 0);

        if (sumDigits(firstHalf) === sumDigits(secondHalf)) {
            count++;
        }
    }

    return count;
};