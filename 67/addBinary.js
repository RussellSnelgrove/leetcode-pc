const assert = require('assert');

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const loopLen = Math.max(a.length, b.length);
    const aLen = a.length;
    const bLen = b.length;
    let string = '';
    let carry = 0;
    for (let i = 1; i <= loopLen; i++) {
        let value = 0;
        if (a[aLen - i] === '1') value++;
        if (b[bLen - i] === '1') value++;
        if (carry === 1) value++;

        if (value > 1) {
            carry = 1;
            string = (value === 2) ? '0' + string : '1' + string;
        } else {
            carry = 0;
            string = String(value) + string;
        }
    }
    return (carry) ? '1' + string : string;
};
assert.equal(addBinary('11', '1'), '100');
assert.equal(addBinary('1010', '1011'), '10101');