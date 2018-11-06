const levelWidth = root => {
  const arr = [root, 's'];
  const counter = [0];

  while(arr.length > 1) {
    const node = arr.shift();
    if(node === 's') {
      counter.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counter[counter.length - 1]++;
    }
  }

  return counter;
}

module.exports = levelWidth;
