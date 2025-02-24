const assert = require('assert');

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let leftPointer = 0;
    let rightPointer = 0;
    let currentValue = nums[0];
    let currentMin;
    while (rightPointer < nums.length) {
        console.log('leftPointer', nums[leftPointer], 'rightpointer', nums[rightPointer], currentValue, nums);
        if (currentValue < target) {
            rightPointer++;
            currentValue += nums[rightPointer]
        } else {
            if (currentValue === target) currentMin = Math.min(rightPointer - leftPointer + 1, currentMin ?? Infinity);
            currentValue -= nums[leftPointer];
            leftPointer++;
        }
    }
    return currentMin ?? 0;
};

// assert.equal(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]), 2);
assert.equal(minSubArrayLen(11, [1, 2, 3, 4, 5]), 3);
