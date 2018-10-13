function arrayChunk1(arr, size) {
    const chunked = [];
    while(arr.length) {
        const newArr = arr.splice(0, size);
        chunked.push(newArr);
    }
    return chunked;
}

module.exports = arrayChunk1;