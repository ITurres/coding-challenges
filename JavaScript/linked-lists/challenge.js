/*
 * add() method:
 *              declare variable to be the first Node and initialize it with the input number.
 *              Then check, if the current node is null, assign the newly created first node variable to
 *              the head, else, declare and initialize a variable to be the current head pointer and run a loop,
 *              Run a loop and reassign the next node to the current node until the current next node reaches
 *              the end (AKA null).
 *              Now this current next node will get the value of the above variable (the new node - with the new value/data);
 *              The method add would actually be an append method?
 *
 * get() method:
 *              Declare and initialize a variable to be the current node (head), then run a loop from the beginning (0),
 *              for every itineration set the current node to be the next node, till the requested index (when stops)
 *              then return the value of the current node requested.
 *
 */

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
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next_node) {
        currentNode = currentNode.next_node;
      }
      currentNode.next_node = newNode;
    }
  }

  get(index) {
    // console.log(`this.head.value = ${this.head.value}`); // ? 3...5;
    // console.log(`this.head.next_node.value = ${this.head.next_node.value}`); // ? 5...7...etc;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next_node;
    }
    // console.log(`currentNode.value = ${currentNode.value}`);
    return currentNode.value;
  }
}

// const list = new LinkedList();

// list.add(3);
// list.add(5);
// list.add(7);
// list.add(1);
// list.add(4);
// console.log("line 44 list.head = ", list.head); // ? => Node { value: 3, next_node: Node { value: 5, next_node: [Node] } };
// console.log(`list.get(0) = ${list.get(0)}`); // ? => 3;
// console.log(`list.get(1) = ${list.get(1)}`); // ? => 5;
// console.log(`list.get(2) = ${list.get(2)}`); // ? => 7;
// console.log(`list.get(3) = ${list.get(3)}`); // ? => 1;
// console.log(`list.get(4) = ${list.get(4)}`); // ? => 4;

module.exports = LinkedList;
