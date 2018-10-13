const charMap = require('./charMap');

function anagram1(str1, str2) {
    const str1CharMap = charMap(str1);
    const str2CharMap = charMap(str2);

    if(Object.keys(str1CharMap).length !== Object.keys(str2CharMap).length) {
        return false;
    }

    for(let char in str1CharMap) {
        if(str1CharMap[char] !== str2CharMap[char]) {
            return false;
        }
    }

    return true;
}

module.exports = anagram1;