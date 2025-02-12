const assert = require('assert');

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var findValue = function (piles, target, start, end, test) {
    if (start > end) return test;
    let cycles = 0;
    let value = start + Math.floor((end - start) / 2);
    for (let i = 0; i < piles.length; i++) {
        cycles += Math.ceil(piles[i] / value);
    }
    if (cycles <= target) return findValue(piles, target, start, value - 1, value);
    if (cycles > target) return findValue(piles, target, value + 1, end, test);
}

var minEatingSpeed = function (piles, h) {

    return findValue(piles, h, 0, Math.max(...piles), 0);
};

assert.equal(minEatingSpeed([1, 4, 3, 2], 9), 2);
console.log('pass1')
assert.equal(minEatingSpeed([25, 10, 23, 4], 4), 25);
console.log('pass2')
assert.equal(minEatingSpeed([3, 6, 7, 11], 8), 4);
console.log('pass3')
