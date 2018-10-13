function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = cleanStr;