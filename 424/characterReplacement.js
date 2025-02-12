const assert = require('assert');

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var characterReplacement = function (s, k) {
    let letterCount = new Map();
    let maxLength = 0, leftPointer = 0; mostCommonCharValue = 0;

    for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
        letterCount.set(s[rightPointer], (letterCount.get(s[rightPointer]) || 0) + 1);
        mostCommonCharValue = Math.max(mostCommonCharValue, letterCount.get(s[rightPointer]));

        while ((rightPointer - leftPointer + 1) - mostCommonCharValue > k) {
            letterCount.set(s[leftPointer], letterCount.get(s[leftPointer]) - 1);
            leftPointer++;
        }
        maxLength = Math.max(rightPointer - leftPointer + 1, maxLength);
    }
    return maxLength;

    // let count = new Map();
    // let res = 0;

    // let l = 0, maxf = 0;
    // for (let r = 0; r < s.length; r++) {
    //     count.set(s[r], (count.get(s[r]) || 0) + 1);
    //     maxf = Math.max(maxf, count.get(s[r]));

    //     while ((r - l + 1) - maxf > k) {
    //         count.set(s[l], count.get(s[l]) - 1);
    //         l++;
    //     }
    //     res = Math.max(res, r - l + 1);
    // }

    // return res;
};

// Using Pointers
// var characterReplacement = function (s, k) {
//     const sArray = s.split('');
//     const tempArray = [];
//     const letterCount = {};
//     let maxLength = 0;
//     let leftPointer = 0;
//     let rightPointer = 0;

//     while (rightPointer < sArray.length) {
//         tempArray.push(sArray[rightPointer]);
//         if (letterCount[sArray[rightPointer]] === undefined) letterCount[sArray[rightPointer]]=0;
//         letterCount[sArray[rightPointer]]++;
//         let mostCommonLetterValue = Math.max(...Object.values(letterCount));
//         let kValueRequirement = tempArray.length - mostCommonLetterValue;

//         while (kValueRequirement > k) {
//             const removedValue = tempArray.shift();
//             letterCount[removedValue]--;
//             leftPointer++;
//             mostCommonLetterValue = Math.max(...Object.values(letterCount));
//             kValueRequirement = tempArray.length - mostCommonLetterValue;
//         }
//         maxLength = Math.max(maxLength, tempArray.length);
//         rightPointer++;
//     }
//     return maxLength
// };


// Brute Force
// var characterReplacement = function (s, k) {
//     let maxLength = 0;
//     const stringArray = s.split('');
//     const tempArray = [];
//     const letterCount = {};
//     for (let i = 0; i < stringArray.length; i++) {
//         tempArray.push(stringArray[i]);
//         if (letterCount[stringArray[i]] === undefined) letterCount[stringArray[i]] = 0;
//         letterCount[stringArray[i]]++;

//         let mostCommonLetterValue = Math.max(...Object.values(letterCount));
//         let kValueRequirement = tempArray.length - mostCommonLetterValue;

//         while (kValueRequirement>k){
//             const removedValue = tempArray.shift();
//             letterCount[removedValue]--;
//             mostCommonLetterValue = Math.max(...Object.values(letterCount));
//             kValueRequirement = tempArray.length - mostCommonLetterValue;
//         }
//         maxLength = Math.max(maxLength, tempArray.length);
//     }
//     return maxLength
// };

assert.equal(characterReplacement('ABAB', 0), 1);
assert.equal(characterReplacement('IMNJJTRMJEGMSOLSCCQICIHLQIOGBJAEHQOCRAJQMBIBATGLJDTBNCPIFRDLRIJHRABBJGQAOLIKRLHDRIGERENNMJSDSSMESSTR', 2), 6);
assert.equal(characterReplacement('KRSCDCSONAJNHLBMDQGIFCPEKPOHQIHLTDIQGEKLRLCQNBOHNDQGHJPNDQPERNFSSSRDEQLFPCCCARFMDLHADJADAGNNSBNCJQOF', 4), 7);
assert.equal(characterReplacement('ABAB', 2), 4);
assert.equal(characterReplacement('AABABBA', 1), 4);
assert.equal(characterReplacement('', 10), 0);
assert.equal(characterReplacement('AAAA', 10), 4);
assert.equal(characterReplacement('ABBB', 2), 4); 