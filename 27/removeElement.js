const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// if we sort first
var removeElement = function (nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === undefined) return nums.length
        if(nums[i] === val){
            while (nums[i] === val) nums.splice(i, 1);
        }
    }
    return nums.length
};



assert.deepEqual(removeElement([3, 2, 2, 3], 3), 2);
assert.deepEqual(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2), 5);