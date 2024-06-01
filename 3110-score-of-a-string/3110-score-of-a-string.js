/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    const sArray = [...s];
    let result = 0; 

    for (let i = 0; i < sArray.length - 1; i++) {
        result = result + imsub(sArray[i], sArray[i + 1]);
    }
    
    return result;
};

function imsub (a, b) {
    const aASCII = a.charCodeAt();
    const bASCII = b.charCodeAt();
    return Math.abs(aASCII - bASCII);
} 