/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length > 1) {
    for (let i = 0; i < matrix.length; i++) {
      if (i !== matrix.length -1 && matrix[i][0] <= target && matrix[i + 1][0] > target) {
        return matrix[i].some(ele => ele === target);
      }else if(i !== matrix.length - 1 && matrix[i][0] > target){
        // console.log()
        return false;
      }else if (i === matrix.length - 1){
        return matrix[i].some(ele => ele === target);
      }
    }
  }else{
    return matrix[0].some(ele => ele === target);
  }
};