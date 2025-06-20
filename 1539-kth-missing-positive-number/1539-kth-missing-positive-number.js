/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let num=1, i=0;
    while(k){
      arr[i]===num++ ? i++ : k--;
    } 
    return num-1;
};