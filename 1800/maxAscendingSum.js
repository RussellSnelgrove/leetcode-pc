const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    let maxSum = nums[0];
    let tempSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            tempSum = 0;
        }
        if (tempSum === 0 || nums[i] > nums[i - 1]) {
            tempSum += nums[i];
            maxSum = Math.max(maxSum, tempSum);
        }
    }
    return maxSum;
};

assert.equal(maxAscendingSum([10, 20, 30, 5, 10, 50]), 65);
assert.equal(maxAscendingSum([10, 20, 30, 40, 50]), 150);
assert.equal(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]), 33);
