function finalPrices(prices: number[]): number[] {
    const n = prices.length;
    const stack: number[] = [];
    const result = [...prices];

    for (let i = n - 1; i >= 0; i--) {
        // Remove prices that can't be a discount
        while (stack.length > 0 && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }

        // Apply discount if available
        if (stack.length > 0) {
            result[i] -= stack[stack.length - 1];
        }

        // Push current price
        stack.push(prices[i]);
    }

    return result;
}
