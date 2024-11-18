/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    if (k === 0) return Array(code.length).fill(0);
    const isReverse = (k < 0);

    const n = code.length;

    const result = [];
    for (let i = 0; i < n; i++) {
        let sum = 0;

        if (isReverse) {
            for (let j = -1; j >= k; j--) {
                const index = ((n + i) + j) % n
                sum += code[index]
            }
        } else {
            for (let j = 1; j <= k; j++) {
                const index = ((n + i) + j) % n
                sum += code[index]
            }
        }

        result.push(sum);
    }

    return result;
};