/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    const fullWords = [...s1.split(' '), ...s2.split(' ')];
    const uniqueWords = new Map();

    fullWords.forEach((word) => {
        if (uniqueWords.has(word)) {
            const newValue = uniqueWords.get(word) + 1;
            uniqueWords.set(word, newValue);
        } else {
            uniqueWords.set(word, 1);
        }
    })

    const result = new Array();
    uniqueWords.forEach((value, key) => {
        if (value === 1) result.push(key);
    })

    return result;
};