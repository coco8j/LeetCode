/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    const [startX1, startY1, endX1, endY1] = rec1;
    const [startX2, startY2, endX2, endY2] = rec2;

    const iStartX = startX1 > startX2 ? startX1 : startX2;
    const iStartY = startY1 > startY2 ? startY1 : startY2;
    const iEndX = endX1 < endX2 ? endX1 : endX2;
    const iEndY = endY1 < endY2 ? endY1 : endY2;

    const rec1Area = getArea(...rec1);
    const rec2Area = getArea(...rec2);
    const intersectionArea = getArea(iStartX, iStartY, iEndX, iEndY);

    return intersectionArea ?  true: false;
};

function getArea(startX, startY, endX, endY) {
    const x = endX - startX;
    const y = endY - startY;

    if (x <= 0 || y <= 0) return 0;
    return x * y;
}