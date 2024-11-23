/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxEqualRowsAfterFlips = function (matrix) {
    const row = matrix.length;
    const column = matrix[0].length;
    const patterns = new Map();

    for (let r = 0; r < row; r++) {
        const standard = matrix[r][0];
        const pattern = [];
        for (let c = 0; c < column; c++) {
            const current = matrix[r][c];

            if (current === standard) pattern.push("0");
            else pattern.push("1");
        }

        const currentPattern = pattern.join("");
        if (patterns.has(currentPattern)) {
            patterns.set(currentPattern, patterns.get(currentPattern) + 1)
        } else {
            patterns.set(currentPattern, 1);
        }
    }

    let result = 0;
    patterns.forEach((value) => result = Math.max(value, result));

    return result;
};