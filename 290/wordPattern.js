const assert = require('assert');

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    const sArray = s.split(' ');
    const patternMap = new Map();
    const sMap = new Map();
    if (pattern.length !== sArray.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (patternMap.has(pattern[i]) || sMap.has(sArray[i])) {
            if (patternMap.get(pattern[i]) !== sArray[i] || sMap.get(sArray[i]) !== pattern[i]) return false;

        } else {
            // assign the maps to each other
            patternMap.set(pattern[i], sArray[i]);
            sMap.set(sArray[i], pattern[i]);
        }
    }
    return true;
};

assert.equal(wordPattern('abba', 'dog constructor constructor dog'), true);