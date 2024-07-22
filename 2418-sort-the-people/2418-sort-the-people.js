/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
    let combined = names.map((name, index) => ({
        name: name,
        height: heights[index]
    }));

    combined.sort((a, b) => b.height - a.height);

    return combined.map(person => person.name);
};