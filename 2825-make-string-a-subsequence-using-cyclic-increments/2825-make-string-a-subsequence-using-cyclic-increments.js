/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const nextChar = new Map();
    for (let i = 0; i < alphabet.length; i++) {
        const current = alphabet[i];
        const next = alphabet[(i + 1) % alphabet.length];
        nextChar.set(current, next);
    }

    let p1 = 0;
    let p2 = 0;

    while (p1 < str1.length && p2 < str2.length) {
        const current = str1[p1];
        const target = str2[p2];

        if (current === target || nextChar.get(current) === target) {
            p2++;
        }
        p1++;
    }

    return p2 === str2.length;
};