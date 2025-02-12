const assert = require('assert');

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let minWindowString = '';
    if (s.length < t.length) return minWindowString;
    if (s.length === t.length && s === t) return t;
    const tMap = {};
    for (let i = 0; i < t.length; i++) tMap[t[i]] = (tMap[t[i]] || 0) + 1;

    for (let startPoint = 0; startPoint < s.length; startPoint++) {
        const startChar = s[startPoint];
        if (tMap[startChar] === undefined) continue;
        let charsToMatch = Object.keys(tMap).length;
        const sMap = {};
        for (let pointer = startPoint; pointer < s.length; pointer++) {

            const character = s[pointer];
            sMap[character] = (sMap[character] || 0) + 1;
            if (tMap[character] !== undefined && sMap[character] === tMap[character]) charsToMatch--;
            // if characters match then we have a substring containing value;
            if (charsToMatch === 0) {
                const substring = s.substring(startPoint, pointer+1);
                if (minWindowString === '' || substring.length < minWindowString.length) {
                    minWindowString = substring;
                    break;
                }
            }
        }
        if (charsToMatch !== 0) break;
    }
    return minWindowString;
};

assert.equal(minWindow('ADOBECODEBANC', 'ABC'), 'BANC');
assert.equal(minWindow('a', 'a'), 'a');
assert.equal(minWindow('a', 'aa'), '');
