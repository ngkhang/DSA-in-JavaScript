class myArray {
  constructor() {
    this.length = 0;
    this.data = {}
  }

  get = (index) => this.data[index];

  push = (item) => {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  };

  pop = () => {
    const itemRemove = this.data[this.length - 1];
    delete this.data[this.length - 1]
    this.length--;
    return itemRemove;
  };

  delete = (index) => {
    const itemRemove = this.data[index];
    this.shift(index);
    return itemRemove;

  }

  shift = (index) => {
    for (let idx = index; idx < this.length - 1; idx++) {
      this.data[idx] = this.data[idx + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new myArray();
console.log(newArr);
newArr.push(10);
newArr.push(12);
newArr.push(21);
newArr.push(1);
console.log(newArr);

console.log(newArr.pop());
console.log(newArr);

newArr.delete(1)
console.log(newArr);
