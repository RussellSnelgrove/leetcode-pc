const assert = require('assert');

var createParenthesis = function (right, left, resultArray, n, result) {
    if (right === left && left === n) {
        resultArray.push(result);
        return;
    }
    if (right < n) {
        createParenthesis(right + 1, left, resultArray, n, result + '(');
    }
    if (right > left) {
        createParenthesis(right, left + 1, resultArray, n, result + ')');
    }

}
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let resultArray = [];
    createParenthesis(0, 0, resultArray, n, '');
    return resultArray;
};

assert.deepEqual(generateParenthesis(3), ["((()))", "(()())", "(())()", "()(())", "()()()"]);
assert.deepEqual(generateParenthesis(1), ["()"]);
