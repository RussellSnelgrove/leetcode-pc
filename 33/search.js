const assert = require('assert');
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var modifiedBinarySearch = function (nums, target, leftPointer, rightPointer, index) {
    if (leftPointer > rightPointer) return -1;
    const middlePointer = leftPointer + Math.floor((rightPointer - leftPointer) / 2);
    const value = nums[middlePointer];
    const lValue = nums[leftPointer];
    const rValue = nums[rightPointer];
    if (value === target) return middlePointer;
    if (lValue <= value) {
        if (target > value || target < lValue) return modifiedBinarySearch(nums, target, middlePointer + 1, rightPointer, index);
        return modifiedBinarySearch(nums, target, leftPointer, middlePointer - 1, index);
    } else {
        if (target < value || target > rValue) return modifiedBinarySearch(nums, target, leftPointer, middlePointer - 1, index);
        return modifiedBinarySearch(nums, target, middlePointer + 1, rightPointer, index);
    }
}

var search = function (nums, target) {
    return modifiedBinarySearch(nums, target, 0, nums.length -1, -1);
};


assert.equal(search([3, 4, 5, 6, 1, 2], 1), 4);
assert.equal(search([3, 5, 6, 0, 1, 2], -1), -1);