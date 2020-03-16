// Basic HashTable

class HashTable {
  constructor() {
    this.state = [];
  }
  hash(str, limit) {
    const charSum = String(str)
      .split("")
      .reduce((sum, char) => (sum += char.charCodeAt()), 0);

    return charSum % limit;
  }

  insert(key, value) {
    const index = this.hash(key);
    this.state[index] = value;
  }

  search(key) {
    const index = this.hash(key);
    console.log(this.state[index]);
    return this.state[index];
  }

  delete(key) {
    const index = this.hash(key);
    delete this.state[index];
  }
}

const hashTable = new HashTable();
hashTable.insert("zonayed", "ahmed");
hashTable.search("zonayed");
hashTable.delete("zonayed");
hashTable.search("zonayed");
