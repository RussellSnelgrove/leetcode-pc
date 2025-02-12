var longestConsecutive = function (nums) {
    // brute force would be
    //  sort nums in array
    //  increment through array having a counter for how many are in sequence
    // runtime would be O(nlogn) assuming sort algorithm is logn

    // ways to improve
    // put into a set where we remove all duplicates

    // after looking at hints
    // We can have the start of a sequence if the number-1 does not exist in the set

    const numsSet = new Set(nums);
    let largestSequence = 0;
    const numberMap = new Map();
    for (const num of numsSet) {
        numberMap.set(num, (numberMap.get(num - 1) || 0) + (numberMap.get(num + 1) || 0) + 1)
        numberMap.set(num + (numberMap.get(num + 1) || 0),  numberMap.get(num))
        numberMap.set(num - (numberMap.get(num - 1) || 0),  numberMap.get(num))
        largestSequence = Math.max(largestSequence, numberMap.get(num));
    }
    return largestSequence;
};

console.log(longestConsecutive([2,20,4,10,3,4,5]));