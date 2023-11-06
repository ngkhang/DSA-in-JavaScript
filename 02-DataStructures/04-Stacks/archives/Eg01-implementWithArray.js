/**
 * Implement a Stack using Arrays
 * 01. isEmpty()
 * 02. peek() - Get top of Stack
 * 03. push(value) - Add value on top
 * 04. pop() - Remove top value
 * 
 */

class Stack {
  constructor() {
    this.array = [];
  }

  // 01. isEmpty()
  isEmpty = () => this.array.length === 0;

  // 02. peek() - Get top of Stack
  peek = () => this.array[this.array.length - 1];

  // 03. push(value) - Add value on top
  push = (value) => {
    this.array.push(value);
    return this.array.length;
  }

  // 04. pop() - Remove top value
  pop = () => {
    return this.array.pop();
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