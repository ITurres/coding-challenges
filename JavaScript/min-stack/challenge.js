class Stack {
  constructor() {
    this.stack = [];
    this.minNumber = [];
  }

  push(number) {
    this.stack.push(number);

    if (
      this.minNumber.length === 0 ||
      number <= this.getLastMinNumberElement()
    ) {
      this.minNumber.push(number);
    }
  }

  pop() {
    const stackTopElement = this.stack.pop();

    if (stackTopElement === this.getLastMinNumberElement()) {
      this.minNumber.pop();
    }
  }

  getLastMinNumberElement() {
    return this.minNumber[this.minNumber.length - 1];
  }

  min() {
    return this.getLastMinNumberElement();
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.min());
// => 3

stack.pop();
stack.push(7);
console.log(stack.min());
// => 3

stack.push(2);
console.log(stack.min());
// => 2

stack.pop();
console.log(stack.min());
// => 3

module.exports = Stack;
