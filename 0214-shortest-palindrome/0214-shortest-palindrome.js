/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {

        const n = s.length;

    // Create a new string which is s + '#' + reversed(s)
    const revS = s.split('').reverse().join('');
    const combined = s + '#' + revS;
    const lps = new Array(combined.length).fill(0);

    // Compute the LPS (Longest Prefix Suffix) array
    for (let i = 1; i < combined.length; i++) {
        let j = lps[i - 1];
        while (j > 0 && combined[i] !== combined[j]) {
            j = lps[j - 1];
        }
        if (combined[i] === combined[j]) {
            j++;
        }
        lps[i] = j;
    }

    // Length of the longest palindromic prefix
    const longestPrefixLength = lps[combined.length - 1];
    const suffix = s.slice(longestPrefixLength);
    const reversedSuffix = suffix.split('').reverse().join('');
    
    return reversedSuffix + s;
    
    // const n = s.length;

    // // Check if the string is already a palindrome
    // const isPalindrome = (str) => {
    //     let left = 0, right = str.length - 1;
    //     while (left < right) {
    //         if (str[left] !== str[right]) return false;
    //         left++;
    //         right--;
    //     }
    //     return true;
    // };

    // // Find the longest palindromic prefix
    // let longestPrefixLength = 0;
    // for (let i = 0; i < n; i++) {
    //     if (isPalindrome(s.slice(0, n - i))) {
    //         longestPrefixLength = n - i;
    //         break;
    //     }
    // }

    // // Create the shortest palindrome
    // const suffix = s.slice(longestPrefixLength);
    // const reversedSuffix = suffix.split('').reverse().join('');
    // return reversedSuffix + s;
};