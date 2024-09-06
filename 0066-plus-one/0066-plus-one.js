/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    const number = digits.join("");
    const digit = BigInt(number);
    const targetDigit = digit + BigInt(1);

    return [...targetDigit.toString()].map(Number);
};