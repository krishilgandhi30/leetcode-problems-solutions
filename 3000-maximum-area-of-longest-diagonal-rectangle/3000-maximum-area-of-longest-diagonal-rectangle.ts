function areaOfMaxDiagonal(dimensions: number[][]): number {
    let maxDiagonal = -1;
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        const [length, width] = dimensions[i];
        const diagonal = Math.sqrt(length * length + width * width);
        const area = length * width;

        // If a larger diagonal is found, update the maxDiagonal and maxArea
        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = area;
        }
        // If the diagonal is the same, choose the rectangle with the larger area
        else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;
};