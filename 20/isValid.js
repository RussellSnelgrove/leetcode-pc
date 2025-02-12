const assert = require('assert');

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const closeBrackets = [')', ']', '}'];
    for (let i = 0; i < s.length; i++) {
        if (closeBrackets.includes(s[i])) {
            const poppedElement = stack.pop();
            switch (s[i]) {
                case ')':
                    if (poppedElement === '(') continue;
                    return false;
                case '}':
                    if (poppedElement === '{') continue;
                    return false;
                case ']':
                    if (poppedElement === '[') continue;
                    return false;
            }
        } else {
            stack.push(s[i]);
        }
    }
    if(stack.length !== 0) return false;
    return true;
};

assert.equal(isValid('()'), true);
assert.equal(isValid('()[]{}'), true);
assert.equal(isValid('([])'), true);
assert.equal(isValid('(]'), false);
assert.equal(isValid('([)]'), false);