function capitalize2(str) {
    let result = str[0].toUpperCase();
    for(let index = 1; index < str.length; index++) {
        if(str[index - 1] === ' ') {
          result += str[index].toUpperCase();
        } else {
          result += str[index];
        }
    }
    return result;
}

module.exports = capitalize2;
