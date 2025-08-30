function isValidSudoku(board: string[][]): boolean {
    // Sets to track numbers seen in rows, columns, and sub-boxes
    const rows = new Array(9).fill(null).map(() => new Set<string>());
    const cols = new Array(9).fill(null).map(() => new Set<string>());
    const boxes = new Array(9).fill(null).map(() => new Set<string>());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;

            // Calculate sub-box index (each 3x3 box)
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            // Check if the number already exists in the row, column, or sub-box
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }

            // Add the number to the sets
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }

    return true;
};