const assert = require('assert');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    let firstDiffLetterIndex;
    for(let i = 0; i<s2.length; i++){
        if(s1[i]!==s2[i]) {
            if (firstDiffLetterIndex === undefined){
                firstDiffLetterIndex=i;
                continue
            } else {
                // swap
                const secondDiffLetter = s2[i];
                s2 = s2.split('');
                s2[i] = s2[firstDiffLetterIndex];
                s2[firstDiffLetterIndex] = secondDiffLetter;
                s2 = s2.join('');
                if (s2 === s1) return true;
                return false;
            }
        } 
    }
    return false;
};

assert.equal(areAlmostEqual('bank', 'kanb'), true);
assert.equal(areAlmostEqual('attack', 'defend'), false);
assert.equal(areAlmostEqual('kelb', 'kelb'), true);