function capitalize1(str) {
    const result = [];
    for(let word of str.split(' ')) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }
    return result.join(' ');
}

module.exports = capitalize1;