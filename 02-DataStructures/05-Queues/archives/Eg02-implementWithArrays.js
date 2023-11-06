/**
 * Implement a Queues using Arrays
 * 01. isEmpty()
 * 02. peek() - Get first of Queues
 * 03. enqueue(value) - Add value on first
 * 04. dequeue() - Remove last value
 * 
 */

class Queues {
  constructor() {
    this.array = []
  }

  // 01. isEmpty()
  isEmpty = () => this.array.length === 0;

  // 02. peek() - Get first of Queues
  peek = () => this.array[0];

  // 03. enqueue(value)
  enqueue = (value) => {
    this.array.push(value);
    return this.array.length;
  }

  // 04. dequeue() 
  dequeue = () => this.array.shift();
}

const myQueue = new Queues();


// 01. isEmpty()
console.log(myQueue.isEmpty());

// 03. enqueue(value) - Add value on first
console.log(myQueue.enqueue(1));
console.log(myQueue.enqueue(2));
console.log(myQueue.enqueue(3));

// 02. peek() - Get first of Queues
console.log(myQueue.peek());

// 04. dequeue() - Remove last value
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);