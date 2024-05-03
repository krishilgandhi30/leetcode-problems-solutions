/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    const v1Array = version1.split('.');
    const v2Array = version2.split('.');
    let i = 0;
    
    while (i < v1Array.length || i < v2Array.length) {
        const num1 = parseInt(v1Array[i]) || 0;
        const num2 = parseInt(v2Array[i]) || 0;
        
        if (num1 < num2) return -1;
        if (num1 > num2) return 1;
        
        i++;
    }
    
    return 0;    
};