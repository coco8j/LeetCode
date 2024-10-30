/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    const binaryN = n.toString(2);

    let hammingWeight = 0;
    for (number of binaryN) {
        if (number !== "0")
            hammingWeight += 1;
    }

    return hammingWeight;
};