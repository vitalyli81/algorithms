/**
 * 
 * In a row of trees, the i-th tree produces fruit with type tree[i].
 * 
 * You start at any tree of your choice, then repeatedly perform the following steps:
 * 
 * Add one piece of fruit from this tree to your baskets.  If you cannot, stop.
 * Move to the next tree to the right of the current tree.  If there is no tree to the right, stop.
 * Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.
 * 
 * You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.
 * 
 * What is the total amount of fruit you can collect with this procedure?
 * 
 * Example 1:
 * 
 * Input: [1,2,1]
 * Output: 3
 * Explanation: We can collect [1,2,1].
 * 
 * Example 2:
 * 
 * Input: [0,1,2,2]
 * Output: 3
 * Explanation: We can collect [1,2,2].
 * If we started at the first tree, we would only collect [0, 1].
 * 
 * Example 3:
 * 
 * Input: [1,2,3,2,2]
 * Output: 4
 * Explanation: We can collect [2,3,2,2].
 * If we started at the first tree, we would only collect [1, 2].
 * Example 4:
 * 
 * Input: [3,3,3,1,2,1,1,2,3,3,4]
 * Output: 5
 * Explanation: We can collect [1,2,1,1,2].
 * If we started at the first tree or the eighth tree, we would only collect 4 fruits.
 * 
 */

/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function (tree) {
  var len = tree.length;

  if (len < 3) return len;

  var result = 0;
  var temp = 0;
  var obj = {};
  var limit = 0;
  var prevIndex = 0;
  var i = 0;

  while (i < len) {
    if (obj[tree[i]]) {
      temp++;
      i++;
    } else if (!obj[tree[i]] && limit < 2) {
      obj[tree[i]] = 1;
      temp++;
      limit++;
      prevIndex = i;
      i++;
    } else {
      obj = {};
      limit = 0;
      result = Math.max(temp, result);
      temp = 0;
      i = prevIndex;
    }
  }

  return Math.max(temp, result);

};