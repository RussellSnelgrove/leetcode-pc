const assert = require('assert');

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if(needle[0] === haystack[i]){
            if (needle.length === 1) return i;
            let needlePointer = 0;
            while(needlePointer <= needle.length && needle[needlePointer] === haystack[i+needlePointer]){
                needlePointer++;
            }
            if (needlePointer === needle.length) return i;
        }
    }
    return -1;
};

assert.equal(strStr('sadbutsad', 'sad'), 0);
assert.equal(strStr('mississippi', 'issip'), 4);
assert.equal(strStr('a', 'a'), 0);
assert.equal(strStr('abc', 'c'), 2);
assert.equal(strStr('abc', 'c'), 2);