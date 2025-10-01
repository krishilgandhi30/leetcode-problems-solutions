function numWaterBottles(numBottles: number, numExchange: number): number {
    let totalDrunk = numBottles;
    let emptyBottles = numBottles;

    while (emptyBottles >= numExchange) {
        // Exchange empty bottles for full bottles
        const newFull = Math.floor(emptyBottles / numExchange);

        // Drink the new full bottles
        totalDrunk += newFull;

        // Update empty bottles:
        // leftover empty bottles + new empty bottles from drinking
        emptyBottles = (emptyBottles % numExchange) + newFull;
    }

    return totalDrunk;
};