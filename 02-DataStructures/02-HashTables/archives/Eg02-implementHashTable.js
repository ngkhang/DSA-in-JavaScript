/**
 * Hash Table
 * 01. _hash()
 * 02 .set(key, value)
 * 03 .get(key)
 * 04 .keys()
 * 05 .values()
 * 
 */

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // Hash function
  _hash = (key) => {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set = (key, value) => {
    const newItem = [key, value];
    let address = this._hash(key);

    if (!this.data[address]) this.data[address] = [];
    this.data[address].push(newItem);
    return newItem;
  }

  get = (key) => {
    let address = this._hash(key);
    let currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) return currentBucket[i][1];
      }
    }
    return undefined;
  }

  keys = () => {
    if (!this.data.length) return undefined;
    let keyArrays = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          this.data[i].forEach(item => {
            keyArrays.push(item[0]);
          });
          continue;
        }
        keyArrays.push(this.data[i][0][0]);
      }
    }
    return keyArrays;
  }

  values = () => {
    if (!this.data.length) return undefined;
    let valuesArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        if (this.data[i].length > 1) {
          this.data[i].forEach(item => {
            valuesArray.push(item[1]);
          })
          continue;
        }
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }
}

const myHashTable = new HashTable(20);

// set()
console.log(myHashTable.set('apple', 1000));    // [ 'apple', 1000 ]
console.log(myHashTable.set('graph', 200));     // [ 'graph', 200 ]
console.log(myHashTable.set('banana', 300));    // [ 'banana', 300 ]
console.log(myHashTable.set('a', 300));         // [ 'a', 300 ]
console.log(myHashTable.set('banaana', 300));   // [ 'banana', 300 ]

// get()
console.log(myHashTable.get('apple'));          // 1000

// keys()
console.log(myHashTable.keys());                // [ 'graph', 'a', 'apple', 'banaana', 'banana' ]

// values()
console.log(myHashTable.values());              // [ 200, 300, 1000, 300, 300 ]