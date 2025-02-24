const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let currentPosition = 0;
    let numberOfSteps = 0;
    while (currentPosition < nums.length - 1) {
        let maxSteps = nums[currentPosition];
        let largestStep = 0;
        if (maxSteps === 1) {
            currentPosition++;
            numberOfSteps++;
            continue
        }
        for (let i = currentPosition + 1; i < currentPosition + maxSteps; i++) {
            console.log('currentPosition', currentPosition, 'index', i, 'indexValue', nums[i]);
            largestStep = Math.max(largestStep, nums[i]);
        }
        currentPosition += largestStep;
        numberOfSteps++;
    }
    return numberOfSteps
};


assert.equal(jump([2, 3, 1, 1, 4]), 2);
assert.equal(jump([2, 3, 0, 1, 4]), 2);
assert.equal(jump([1, 2, 3, 4, 5]), 3);