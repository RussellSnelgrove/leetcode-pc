const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let numberOfSteps = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    while (rightPointer < nums.length - 1) {
        let furtherReach = 0;
        for (let i = leftPointer; i < rightPointer + 1; i++) {
            furtherReach = Math.max(furtherReach, i + nums[i])
        }
        leftPointer = rightPointer + 1;
        rightPointer = furtherReach;
        numberOfSteps++;
    }
    return numberOfSteps
};


assert.equal(jump([2, 3, 1, 1, 4]), 2);
assert.equal(jump([2, 3, 0, 1, 4]), 2);
assert.equal(jump([1, 2, 3, 4, 5]), 3);