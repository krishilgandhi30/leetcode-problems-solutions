/**
 * @param {Function[]} functions
 * @return {Function}
 */
// var compose = function(functions) {
    
//     return function(x) {
//     }
// };
const compose = f => x => f.reduceRight((a, c) => c(a), x)


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */