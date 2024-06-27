/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let first_edge = edges[0];
    let second_edge = edges[1];

    return second_edge.includes(first_edge[0]) ? first_edge[0] : first_edge[1];
};