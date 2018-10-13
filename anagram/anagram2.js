const cleanStr = require('./cleanStr');

function anagram2(str1, str2) {
    return cleanStr(str1) === cleanStr(str2);
}

module.exports = anagram2;