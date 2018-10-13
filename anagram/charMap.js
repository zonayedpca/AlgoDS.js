// This charMap should filter out only the alphabets and also it should consider both lowercase and uppercase letter same
function charMap(str) {
    const map = {};

    for(let char of str.toLowerCase().replace(/[^\w]/g, '')) {
        map[char] = map[char] + 1 || 1;
    }

    return map;
}

module.exports = charMap;