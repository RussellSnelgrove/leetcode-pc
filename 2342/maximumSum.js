const assert = require('assert');

/**
 * @param {number[]} nums
 * @return {number}
 */
function recursiveSum(num) {
    if (num === 0) {
        return 0;
    }
    return (num % 10) + recursiveSum(Math.floor(num / 10));
}

var maximumSum = function (nums) {
    const sumsMap = {};
    // create sumsMap
    for (let i = 0; i < nums.length; i++) {
        const numValue = recursiveSum(nums[i]);
        if (sumsMap[numValue] === undefined) sumsMap[numValue] = [];
        sumsMap[numValue].push(nums[i]);
    }
    let maxValue = -1;
    for (let obj in sumsMap) {
        if (sumsMap[obj].length < 2) continue;
        sumsMap[obj].sort((a, b) => b - a);
        maxValue = Math.max(maxValue, sumsMap[obj][0] + sumsMap[obj][1]);
    }
    return maxValue
};

assert.equal(maximumSum([18, 43, 36, 13, 7]), 54);
assert.equal(maximumSum([10, 12, 19, 14]), -1);