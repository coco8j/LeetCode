/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for (let i = 1; i < s.length; i++) {
      const index = s.length -1 -i;
        char = s[index];
        s.push(char);
        s.splice(index, 1)
    }
};