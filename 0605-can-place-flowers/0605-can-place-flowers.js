/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let count = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        const before = flowerbed[i - 1];
        const position = flowerbed[i];
        const after = flowerbed[i + 1];

        if (before === 0 && after === 0 && position === 0) {
            count++;
            i++;
        } else if (i === 0 && after === 0 && position === 0) {
            count++;
            i++;
        } else if (i === flowerbed.length - 1 && before === 0 && position === 0) {
            count++;
        }

        if (count >= n) {
            return true;
        }
    }

    return false;
};