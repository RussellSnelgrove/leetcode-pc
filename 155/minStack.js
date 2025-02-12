
var MinStack = function () {
    this.stack = [];
    this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    if (this.minStack.length > 0) this.minStack.push(Math.min(val, (this.minStack[minStack.length-1])))
    if (this.minStack.length === 0) this.minStack.push(val)
    this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.minStack.pop();
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    const topValue = this.stack.pop();
    this.stack.push(topValue);
    return topValue;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[length-1];
};
/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */