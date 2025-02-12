const assert = require('assert');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isAnagram = function (s1, s2) {
    if (s1.length !== s2.length) return false;
    const s1Map = new Map();
    const s2Map = new Map();
    for (let i = 0; i < s1.length; i++) {
        s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
        s2Map.set(s2[i], (s2Map.get(s2[i]) || 0) + 1);
    }
    for (let [key, value] of s1Map) {
        if(s2Map.get(key) !== value) return false;
    }
    return true;
};

assert.equal(isAnagram('anagram', 'nagaram'), true);
assert.equal(isAnagram('car', 'rat'), false);