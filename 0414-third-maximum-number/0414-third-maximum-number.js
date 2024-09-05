/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const uniqeNumbers = new Set([...nums]);
    const numbers = [...uniqeNumbers];
    numbers.sort((a, b) => b - a);


    return numbers[2] || numbers[2] === 0 ? numbers[2] : numbers[0];
};