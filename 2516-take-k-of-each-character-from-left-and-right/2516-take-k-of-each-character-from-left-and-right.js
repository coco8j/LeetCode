/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function(s, k) {
    const characters = [0, 0, 0];
    const n = s.length;
    
    for (const char of s) {
        characters[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    
    if (characters[0] < k || characters[1] < k || characters[2] < k) {
        return -1;
    }
    
    const curr = [0, 0, 0];
    let maxLen = 0;
    let left = 0;
    
    for (let right = 0; right < n; right++) {
        curr[s.charCodeAt(right) - 'a'.charCodeAt(0)]++;
        
        while (left <= right && (curr[0] > characters[0] - k ||
               curr[1] > characters[1] - k ||
               curr[2] > characters[2] - k)) {
            curr[s.charCodeAt(left) - 'a'.charCodeAt(0)]--;
            left++;
        }
        
        maxLen = Math.max(maxLen, right - left + 1);
    }
    
    return n - maxLen;
};