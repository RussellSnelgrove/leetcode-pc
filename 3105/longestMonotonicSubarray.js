const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let increasingCount = 1;
    let decreasingCount = 1;
    let maxCount = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            increasingCount += 1;
            maxCount = Math.max(maxCount, increasingCount, decreasingCount);
            decreasingCount = 1;
            continue;
        }
        if (nums[i] < nums[i - 1]) {
            decreasingCount += 1;
            maxCount = Math.max(maxCount, increasingCount, decreasingCount);
            increasingCount = 1;
            continue;
        }
        increasingCount = 1;
        decreasingCount = 1;
    }
    maxCount = Math.max(maxCount, increasingCount, decreasingCount);
    return maxCount;
};

assert.equal(longestMonotonicSubarray([1, 4, 3, 3, 2]), 2);
assert.equal(longestMonotonicSubarray([3, 3, 3, 3]), 1);
assert.equal(longestMonotonicSubarray([3, 2, 1]), 3);