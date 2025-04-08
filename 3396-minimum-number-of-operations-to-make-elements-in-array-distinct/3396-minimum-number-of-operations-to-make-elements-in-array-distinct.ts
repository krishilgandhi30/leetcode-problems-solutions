function minimumOperations(nums: number[]): number {
    let operations = 0;

    // Check if the array already has distinct elements
    const uniqueElements = new Set(nums);
    if (uniqueElements.size === nums.length) {
        return 0; // No operations needed, as the array is already distinct
    }

    // Keep removing 3 elements at a time
    while (nums.length > 0) {
        // Remove the first 3 elements (or fewer if the array has less than 3)
        nums.splice(0, 3);
        operations++;

        // Check if all remaining elements are distinct
        const uniqueElementsAfterRemoval = new Set(nums);
        if (uniqueElementsAfterRemoval.size === nums.length) {
            break;
        }
    }

    return operations;
};