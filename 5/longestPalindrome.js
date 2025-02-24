const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let string = '';
    let stringLength = 0;
    for (let i = 0; i < s.length; i++) {
        let lPointer = i;
        let rPointer = i;
        while (s[lPointer] === s[rPointer] && lPointer >= 0 && rPointer < s.length) {
            if (rPointer - lPointer + 1 > stringLength) {
                string = s.substring(lPointer, rPointer + 1);
                stringLength = rPointer - lPointer + 1;
            }
            lPointer--;
            rPointer++;
        }

        lPointer = i;
        rPointer = i + 1;
        while (s[lPointer] === s[rPointer] && lPointer >= 0 && rPointer < s.length) {
            if (rPointer - lPointer + 1 > stringLength) {
                string = s.substring(lPointer, rPointer + 1);
                stringLength = rPointer - lPointer + 1;
            }
            lPointer--;
            rPointer++;
        }
    }
    return string;
};

assert.equal(longestPalindrome('babad'), 'bab');
assert.equal(longestPalindrome('cbbd'), 'bb');