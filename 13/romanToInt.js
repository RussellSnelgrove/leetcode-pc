const assert = require('assert');

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
    let number = 0;
    const edgeCase = ['IV', 'IX', 'XL', 'XC', 'CD', 'CM'];
    for (let x = 0; x < s.length; x++) {
        let temp = 0;
        const negative = (edgeCase.includes(s.slice(x, x + 2)))
        switch (s[x]) {
            case 'I':
                temp++;
                break;
            case 'V':
                temp += 5;
                break;
            case 'X':
                temp += 10;
                break;
            case 'L':
                temp += 50;
                break;
            case 'C':
                temp += 100;
                break;
            case 'D':
                temp += 500;
                break;
            case 'M':
                temp += 1000;
                break;
        }
        number += negative ? 0-temp : temp;
    }
    return number;
};

assert.equal(romanToInt('III'), 3);
assert.equal(romanToInt('LVIII'), 58);
assert.equal(romanToInt('MCMXCIV'), 1994);