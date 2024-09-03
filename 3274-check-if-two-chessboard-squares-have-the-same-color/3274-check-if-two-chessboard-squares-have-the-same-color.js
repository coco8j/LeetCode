/**
 * @param {string} coordinate1
 * @param {string} coordinate2
 * @return {boolean}
 */
var checkTwoChessboards = function (coordinate1, coordinate2) {
    const columnLetter = ["a", "b", "c", "d", "e", "f", "g", "h"];

    function getColor(column, row) {
        const isRowEven = !(row % 2);
        const isColumnEven = !(column % 2);

        if ((isRowEven && isColumnEven)
            || (!isRowEven && !isColumnEven)) return "white";

        return "black";
    }

    const [c1, r1] = [...coordinate1];
    const [c2, r2] = [...coordinate2];

    const color1 = getColor(columnLetter.indexOf(c1), r1);
    const color2 = getColor(columnLetter.indexOf(c2), r2);

    return (color1 === color2);
};