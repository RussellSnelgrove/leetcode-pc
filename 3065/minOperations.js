const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let operationCount = 0;
    nums.sort((a,b) => {return a-b});
    while(nums[0] < k) {
        nums.shift();
        operationCount++;
    }
    return operationCount;
};

assert.equal(minOperations([2,11,10,1,3], 10), 3);
assert.equal(minOperations([1,1,2,4,9], 1), 0);
assert.equal(minOperations([1,1,2,4,9], 9), 4);