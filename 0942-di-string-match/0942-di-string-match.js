/**
 * @param {string} s
 * @return {number[]}
 */
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    const n = s.length;
    let low = 0, high = n;
    const result = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            result.push(low);
            low++;
        } else {
            result.push(high);
            high--;
        }
    }

    result.push(low);
    return result;
};
