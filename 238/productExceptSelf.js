/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const numberOfNums = nums.length;
    const result = new Array(numberOfNums).fill(1);

    // Caluclates the prefix
    for (let i = 1; i < numberOfNums; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let postfix = 1;
    for (let i = numberOfNums - 1; i >= 0; i--) {
        result[i] = result[i] * postfix;
        postfix *= nums[i];
    }
    return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
// [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
// [0,0,9,0,0]

