class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}
class LinkedList {
  constructor() {
    this.head;
  }

  add(number) {
    const newNode = new Node(number);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.get_current_node().next_node = newNode;
    }
  }

  remove() {
    if (this.head == null) {
      return -1;
    }

    const nodeDeleted = this.head;

    if (this.head.next_node == null) {
      this.head = this.head.next_node;
    } else {
      this.head = this.head.next_node;
      nodeDeleted.next_node = null;
    }
    return nodeDeleted.value;
  }

  get_current_node() {
    let currentNode = this.head;
    while (currentNode.next_node) {
      currentNode = currentNode.next_node;
    }
    return currentNode;
  }
}

class Queue extends LinkedList {
  add(number) {
    super.add(number);
  }

  remove() {
    return super.remove();
  }
}

const queue = new Queue();

queue.add(3);
queue.add(5);
console.log(queue.remove());
// => 3

queue.add(2);
queue.add(7);
console.log(queue.remove());
// => 5

console.log(queue.remove());
// => 2

console.log(queue.remove());
// => 7

console.log(queue.remove());
// => -1

module.exports = Queue;
