const assert = require('assert');


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target, lPointer, rPointer) {
    console.log('lpointer, rpointer', lPointer, rPointer)
    if (rPointer < lPointer) return lPointer;
    const middleIndex = lPointer + Math.floor((rPointer - lPointer) / 2);
    if (nums[middleIndex] === target) return middleIndex;
    console.log('nums[middleIndex]', nums[middleIndex]);
    console.log('target', target);
    if (nums[middleIndex] > target) return binarySearch(nums, target, lPointer, middleIndex-1);
    if (nums[middleIndex] < target) return binarySearch(nums, target, middleIndex+1, rPointer);
}

var searchInsert = function (nums, target) {
    const index = binarySearch(nums, target, 0, nums.length-1);
    return index;
};


assert.equal(searchInsert([1, 3, 5, 6], 5), 2);
assert.equal(searchInsert([1, 3, 5, 6], 2), 1);
assert.equal(searchInsert([1, 3, 5, 6], 7), 4);