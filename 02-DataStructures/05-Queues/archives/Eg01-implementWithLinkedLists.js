/**
 * Implement a Queues using Linked Lists
 * 01. isEmpty()
 * 02. peek() - Get first of Queues
 * 03. enqueue(value) - Add value on first
 * 04. dequeue() - Remove last value
 * 
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queues {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  // 01. isEmpty()
  isEmpty = () => this.length === 0;

  // 02. peek() - Get first of Queues
  peek = () => this.first;

  // 03. enqueue(value)
  enqueue = (value) => {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      this.last.next = newNode;
      this.last = newNode
    }

    this.length++;
    return newNode;
  }

  // 04. dequeue() 
  dequeue = () => {
    if (this.isEmpty()) return null;

    if (this.first === this.last) this.last = null;

    const itemRemove = this.first;
    this.first = itemRemove.next;
    itemRemove.next = null;
    this.length--;
    return itemRemove;
  }
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
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);