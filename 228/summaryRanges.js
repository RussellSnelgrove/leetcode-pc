const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let rangeStart = 0;
    const outputArray = [];
    for (let rightPointer = 1; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] - 1 === nums[rightPointer - 1]) {
            continue;
        } else {
            (rangeStart === rightPointer-1) ? outputArray.push(String(nums[rangeStart])) : outputArray.push(`${nums[rangeStart]}->${nums[rightPointer - 1]}`);

            rangeStart = rightPointer;
        }
    }
    (rangeStart === nums.length - 1) ? outputArray.push(String(nums[rangeStart])) : outputArray.push(`${nums[rangeStart]}->${nums[nums.length - 1]}`);
    return outputArray;
};

assert.deepEqual(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
assert.deepEqual(summaryRanges([0, 2, 3, 4, 6, 8, 9]), ["0", "2->4", "6", "8->9"]);