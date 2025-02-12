const assert = require('assert');

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        const maxLength = Math.max(strs[i].length, commonPrefix.length);
        for (let j = 0; j < maxLength; j++) {
            if(commonPrefix[j] === strs[i][j]) continue;
            commonPrefix = commonPrefix.slice(0,j);
            break;
        }
    }
    return commonPrefix;
};

assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
assert.equal(longestCommonPrefix(['dog', 'racecar', 'ca']), '');
assert.equal(longestCommonPrefix(["ab", "a"]), 'a');