/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
    const multiples = [];

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];

        if (number % 6 === 0) {
            multiples.push(number);
        }
    }

    if (!multiples.length) return 0;

    const sum = multiples.reduce((accum, digit) => accum + digit, 0)
    const average = sum / multiples.length;

    return Math.floor(average)
};