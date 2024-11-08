/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const total = {
        row: [],
        col: [],
    };

    indices.forEach(([ri, ci]) => {
        if (total.row[ri]) total.row[ri] += 1;
        else total.row[ri] = 1;

        if (total.col[ci]) total.col[ci] += 1;
        else total.col[ci] = 1;
    });

    let oddValue = 0;

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const rowValue = total.row[r] ? total.row[r] : 0
            const colValue = total.col[c] ? total.col[c] : 0

            if ((rowValue + colValue) % 2 === 1) oddValue++;
        }
    }

    return oddValue;
};