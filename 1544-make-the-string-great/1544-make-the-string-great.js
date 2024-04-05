/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
     const stack = [];
    
    for (const char of s) {
        const prevChar = stack[stack.length - 1];
        if (prevChar && Math.abs(char.charCodeAt(0) - prevChar.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.join('');
};