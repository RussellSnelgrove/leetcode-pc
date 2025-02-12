const assert = require('assert');

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let rightPointer = height.length - 1;
    let leftPointer = 0;
    let maxValue = 0;
    while (leftPointer < rightPointer) {
        const x = rightPointer-leftPointer;
        const y = Math.min(height[rightPointer], height[leftPointer]);
        (y === height[leftPointer]) ? leftPointer++ : rightPointer--;
        const area = y*x;
        maxValue = Math.max(area, maxValue);
    }
    return maxValue;
};

assert.equal(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
assert.equal(maxArea([1, 7, 2, 5, 4, 7, 3, 6]), 36);
assert.equal(maxArea([2, 2, 2]), 4);
assert.equal(maxArea([1, 1]), 1);
