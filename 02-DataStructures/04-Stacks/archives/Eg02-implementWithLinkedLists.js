/**
 * Implement a Stack using Linked Lists
 * 01. isEmpty()
 * 02. peek() - Get top of Stack
 * 03. push(value) - Add value on top
 * 04. pop() - Remove top value
 * 
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // 01. isEmpty()
  isEmpty = () => this.length === 0;

  // 02. peek() - Get top of Stack
  peek = () => this.top;

  // 03. push(value) - Add value on top
  push = (value) => {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    }
    else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
    return newNode;
  }

  // 04. pop() - Remove top value
  pop = () => {
    if (!this.top) return null;
    // if (this.isEmpty() === 0) return null;

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    let holdingItemRemove = this.top;
    this.top = this.top.next;
    holdingItemRemove.next = null;
    this.length--;
    return holdingItemRemove;
  }
}

const myStack = new Stack();

// 01. isEmpty()
console.log(myStack.isEmpty());

// 03. push(value) - Add value on top
myStack.push(1)
myStack.push(2)
myStack.push(3)

// 02. peek() - Get top of Stack
console.log(myStack.peek());

// 04. pop() - Remove top value
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
console.log(myStack.pop());