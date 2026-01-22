function buildArray(target: number[], n: number): string[] {
    const result: string[] = [];
    let i = 0; // pointer for target

    for (let num = 1; num <= n && i < target.length; num++) {
        result.push("Push");

        if (num === target[i]) {
            i++; // keep it
        } else {
            result.push("Pop"); // discard it
        }
    }

    return result;
};