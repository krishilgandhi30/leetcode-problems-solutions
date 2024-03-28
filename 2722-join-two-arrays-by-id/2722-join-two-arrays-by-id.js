/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Create a map to store objects by their id
    const idMap = new Map();

    // Iterate over arr1 and add objects to the map
    for (const obj of arr1) {
        idMap.set(obj.id, obj);
    }

    // Iterate over arr2 and merge objects into the map
    for (const obj of arr2) {
        const id = obj.id;
        if (idMap.has(id)) {
            // If the id already exists, merge properties
            const existingObj = idMap.get(id);
            Object.assign(existingObj, obj);
        } else {
            // If id doesn't exist, add the object to the map
            idMap.set(id, obj);
        }
    }

    // Convert the map values to an array and sort by id
    const joinedArray = Array.from(idMap.values()).sort((a, b) => a.id - b.id);

    return joinedArray;
};