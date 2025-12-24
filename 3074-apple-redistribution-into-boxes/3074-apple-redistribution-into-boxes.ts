function minimumBoxes(apple: number[], capacity: number[]): number {
     // 1. Total apples
  let totalApples = 0;
  for (const a of apple) {
    totalApples += a;
  }

  // 2. Sort capacities descending
  capacity.sort((a, b) => b - a);

  // 3. Pick boxes greedily
  let usedCapacity = 0;
  let boxCount = 0;

  for (const cap of capacity) {
    usedCapacity += cap;
    boxCount++;

    if (usedCapacity >= totalApples) {
      return boxCount;
    }
  }

  // If all boxes are needed
  return boxCount;
};