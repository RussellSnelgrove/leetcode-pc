const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let maxRotations = nums.length;
    let countInARow = 0;
    if (nums.length <=1) return true;
    for (let i = 1; i < 2 * nums.length; i++) {
        if (nums[i % maxRotations] >= nums[(i - 1) % maxRotations]) countInARow++;
        if (nums[i % maxRotations] < nums[(i - 1) % maxRotations]) countInARow = 0;
        if (countInARow === maxRotations-1) return true;
    }
    return false
};

assert.equal(check([9, 10, 1, 2, 3, 3, 4, 4, 7, 8]), true);
assert.equal(check([2, 1, 3, 4]), false);
assert.equal(check([3, 4, 5, 1, 2]), true);
assert.equal(check([11, 11, 1, 20]), false);