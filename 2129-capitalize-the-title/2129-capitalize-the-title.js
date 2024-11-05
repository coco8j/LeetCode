/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function (title) {
    const words = title.split(" ").filter(word => word !== "");

    const capitalizedWords = words.map((word) => {
        if (word.length < 3) {
            return word.toLowerCase();
        } else {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
    })

    return capitalizedWords.join(" ");
};
