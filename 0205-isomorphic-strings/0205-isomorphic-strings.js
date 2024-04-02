/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];
        if ((map1.has(charS) && map1.get(charS) !== charT) ||
            (map2.has(charT) && map2.get(charT) !== charS)) {
            return false;
        }
        map1.set(charS, charT);
        map2.set(charT, charS);
    }
    return true;
};
