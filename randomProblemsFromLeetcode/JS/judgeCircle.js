/**
 * There is a robot starting at position (0, 0), the origin, on a 2D plane.
 * Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.
 * The move sequence is represented by a string, and the character moves[i] represents its ith move.
 * Valid moves are R (right), L (left), U (up), and D (down).
 * If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.
 * Note: The way that the robot is "facing" is irrelevant.
 * "R" will always make the robot move to the right once,
 * "L" will always make it move left, etc.
 * Also, assume that the magnitude of the robot's movement is the same for each move.
 * 
 * Examples:
 * 
 * Input: "UD"
 * Output: true 
 * 
 * Input: "LL"
 * Output: false
 * 
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  var horizontal = 0;
  var vertical = 0;

  for (let i = 0; i < moves.length; i++) {
    let move = moves.charAt(i);
    if (move === 'U') {
      vertical += 1;
    } else if (move === 'D') {
      vertical -= 1;
    } else if (move === 'R') {
      horizontal += 1;
    } else if (move === 'L') {
      horizontal -= 1;
    }
  }
  if (vertical === 0 && horizontal === 0) {
    return true;
  }

  return false;
};
