const assert = require('assert');

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const refinedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // solution using copy of string
    const reverseString = refinedString.split('').reverse().join('');
    if(reverseString === refinedString) return true;
    return false;


    // // solution using "pointers"
    // const stringLength = refinedString.length;
    // if (stringLength <= 1) return true;
    // for (let i = 0; i < stringLength / 2; i++) {
    //     const rightElementCheck = stringLength-i-1;
    //     if(refinedString[i] !== refinedString[rightElementCheck]) return false;
    // }
    // return true;
};


assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
assert.equal(isPalindrome('race a car'), false);
assert.equal(isPalindrome(' '), true);
assert.equal(isPalindrome('0P'), false);