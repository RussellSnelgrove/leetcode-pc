const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const resultArray = [];
    const numArray = [];
    let leftPointer = 0, rightPointer = 0;

    while (rightPointer < nums.length) {
        while (numArray.length && nums[numArray.at(-1)] < nums[rightPointer]) {
            numArray.pop();
        }
        numArray.push(rightPointer);
        console.log('numarray', numArray);
        console.log('leftPointer', leftPointer, ' numArray.at(0)',  numArray.at(0));
        if (leftPointer > numArray.at(0)) {
            numArray.shift();
        }

        if ((rightPointer + 1) >= k) {
            resultArray.push(nums[numArray.at(0)]);
            leftPointer++;
        }
        rightPointer++;
    }

    return resultArray;
};

assert.deepEqual(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
assert.deepEqual(maxSlidingWindow([1], 1), [1]);
// assert.deepEqual(maxSlidingWindow(, 1), [1]);