const assert = require('assert');
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numsMap = new Map();
    for (let i = 0; i<nums.length; i++){
        const num2 = target-nums[i];
        if (numsMap.get(num2) !== undefined) {
            return [numsMap.get(num2), i];
        } else {
            numsMap.set(nums[i], i);
        }
    }
    return [];
    // update
};
assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
