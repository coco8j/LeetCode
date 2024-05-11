/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let standardWord = words[0];
    const compairsonWords = [];
    
    for ( let i = 1; i < words.length; i++) {
    compairsonWords.push(words[i])
    }
    
    for (let word of compairsonWords) {
        for (let i = 0; i < standardWord.length; i++) {
            const currChar = standardWord[i];
            if (word.includes(currChar)) {
                word = word.replace(currChar,'');
            } else {
                standardWord = standardWord.replace(currChar, '');
                i--;
            }
        }
    }
    const result = [];

    for (const char of standardWord) {
        result.push(char)
    }

    return result;
};