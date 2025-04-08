const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
    let leftPointer = 0;
    let rightPointer = 0;
    let maxSubArray = 0;
    let current = 0;
    while (rightPointer < nums.length) {
        while ((current & nums[rightPointer]) !== 0) {
            current = current ^ nums[leftPointer];
            leftPointer++;
        }
        current = current ^ nums[rightPointer];
        maxSubArray = Math.max(rightPointer-leftPointer+1, maxSubArray);
        rightPointer++;
    }
    return maxSubArray;
};

assert.equal(longestNiceSubarray([1, 3, 8, 48, 10]), 3);
assert.equal(longestNiceSubarray([3, 1, 5, 11, 13]), 1);
assert.equal(longestNiceSubarray([1, 3, 8, 48, 10]), 3);