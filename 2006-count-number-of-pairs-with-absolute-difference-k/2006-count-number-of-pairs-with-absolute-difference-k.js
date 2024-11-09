/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let possibleCase = 0;
    if (nums.length < 2) return possibleCase;

    while (nums.length > 1) {
        const target = nums.pop();

        nums.forEach((rest) => {
            if (Math.abs(rest - target) === k) possibleCase++;
        })
    }

    return possibleCase;
};