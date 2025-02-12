const assert = require('assert');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let s1Obj = {};
    for (let i = 0; i < s1.length; i++) s1Obj[s1[i]] = ((s1Obj[s1[i]] || 0) + 1);
    let matchNumber = Object.keys(s1Obj).length;
    for (let leftPointer = 0; leftPointer < s2.length; leftPointer++) {
        let s2Obj = {};
        let currentCount = 0;
        let s2SizeCount = 0;
        for (let rightPointer = leftPointer; rightPointer < s2.length; rightPointer++) {
            let character = s2[rightPointer];
            s2Obj[character] = ((s2Obj[character] || 0) + 1);
            if(s1Obj[character] === undefined){
                leftPointer = rightPointer;
                break;
            }
            // no extra characters check
            if ((s1Obj[character] || 0) < s2Obj[character] || s2SizeCount > s1.length) break;
            // if character exists +1
            if ((s1Obj[character] || 0) === s2Obj[character]) currentCount++;
            // if all correct characters are matched, return true
            if (currentCount === matchNumber) return true;
            s2SizeCount++;
        }
    }
    return false;
};

assert.equal(checkInclusion('ab', 'eidbaooo'), true);
assert.equal(checkInclusion('ab', 'eidboaoo'), false);
assert.equal(checkInclusion('abc', 'lecabee'), true);
assert.equal(checkInclusion('abc', 'lecaabee'), false);