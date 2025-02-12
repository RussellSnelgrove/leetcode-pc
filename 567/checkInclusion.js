const assert = require('assert');

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const s1Map = new Map();
    for (let i = 0; i < s1.length; i++) {
        s1Map.set(s1[i], (s1Map.get(s1[i]) || 0) + 1);
    }
    let tempMap = new Map();
    let leftPointer = 0;
    let rightPointer = 0;
    while (rightPointer < s2.length) {
        const rightPointerValue = s2[rightPointer];
        if (s1Map.get(rightPointerValue)) {
            tempMap.set(rightPointerValue, (tempMap.get(rightPointerValue) || 0) + 1);
            if (tempMap.get(rightPointerValue) > s1Map.get(rightPointerValue)) {
                while(tempMap.get(rightPointerValue) > s1Map.get(rightPointerValue)){
                    tempMap.set(s2[leftPointer], tempMap.get(s2[leftPointer]) - 1);
                    leftPointer++;
                    if(leftPointer<rightPointer) return 'failure'
                }
                continue;
            }
            let tempMapComplete = true;
            for (let [key, value] of s1Map) {
                if (tempMap.get(key) !== value) tempMapComplete = false;
            }
            rightPointer++;
            if (tempMapComplete) return true;
        } else {
            tempMap = new Map();
            leftPointer = rightPointer;
            rightPointer++;
        }
    }

    return false;
};

assert.equal(checkInclusion('ab', 'eidbaooo'), true);
assert.equal(checkInclusion('ab', 'eidboaoo'), false);
assert.equal(checkInclusion('abc', 'lecabee'), true);
assert.equal(checkInclusion('abc', 'lecaabee'), false);