const assert = require('assert');

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let string = s.split('')
    let pointer = 0;
    const numberRegex = /[0-9]/;
    const letterRegex = /[a-z]/;
    while(pointer<s.length){
        if(numberRegex.test(string[pointer])) {
            string[pointer] = '';
            pointer--;
            while (!letterRegex.test(string[pointer]) && pointer > 0 ) pointer--;
            string[pointer] = '';
        } else {
            pointer++
        }
    }
    return string.join('');
};


assert.equal(clearDigits('cb34'), '');