/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (j = 0; j <= needle.length; j++) {
                if (j === needle.length) return i;
                if (haystack[i+j] !== needle[j]) break;
            }
        }
    }

    return -1;
};