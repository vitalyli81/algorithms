/**
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 * 
 * Example
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 * 
 */

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function (x) {
  var prev = this.stack.length ? this.stack[this.stack.length - 1].min : null;
  var min = prev;

  if (prev === null || x < prev) {
    min = x;
  }

  this.stack.push({
    val: x,
    min: min
  });
};

/**
* @return {void}
*/
MinStack.prototype.pop = function () {
  this.stack.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function () {
  return this.stack.length && this.stack[this.stack.length - 1].min || null;
};

MinStack.prototype.createNew = function () {
  return new MinStack();
}
/** 
* Your MinStack object will be instantiated and called as such:
* var obj = Object.create(MinStack).createNew()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/