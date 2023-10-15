/*
>>> //? **input = all the methods arguments value;
 * addAt() method:
                * declare and initialize a variable for a new node and another 
                * with the node requested by the index **input.
                * Check if the head of the list is null, if so, the head gets the new node and 
                * the length of the list increments++. >>return<<
                * 
                * check if the node requested by the index **input is null, if so, return null; >>return<<
                * 
                * if not, continue:
                * Check if the index **input is 0, if so, the head gets the new node, the head next node 
                * gets the node requested by the index **input, and the length of the list increments++;
                * else:
                * Declare and initialize a variable for the previous node of the requested one,
                * check if this is null, if so, return null; >>return<<
                * if not, continue:
                * The previous node next node will point to a new node with the value of the 
                * **input item and its next node pointing to the previous node next node. the length of the list
                * increments++;
                * ----- end of method ----- 
                * 
 * remove() method:
                 * declare and initialize a variable for the node at the index requested by the **input index,
                 * check if this is null, if so, return null. >>return<<;
                 * if not, continue: 
                 * Check if index is 0, if so, the head will pont to the head next node
                 * the length of the list decrements--.
                 * else:
                 * Declare and initialize a variable for the previous node of the requested one,
                 * check if this is null, if so, return null. >>return<<;
                 * if not, continue:
                 * This previous node next node will point to the next node of node at the index requested,
                 * the length of the list will decrements--.
                 * ----- end of method ---
                 *
* get() method (UPDATED):
                       * this method will now return node value of the requested index **input,
                       * calling 'call_get_node' method (see below);
                       * ----- end of method -----
                       *
* call_get_node() method:
                      * this method will return the value of the call the private method '#get_node()';
                      * ----- end of method -----
                      * 
* #get_node() private method:
                           * check if index is less than 0 or if index is greater or equal to the list length,
                           * if so, return null. >>return<<;
                           * if not, continue:
                           * Declare and initialize a variable that gets the head current node,
                           * check if index is equal to 0, if so, return this current node. >>return<<;
                           * if not, continue:
                           * Loop through all node 'indexes' till the **input index, while so, update the 
                           * current node variable to get the its next node;
                           * return this current node;
                           * ----- end of method -----
     
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
    this.length = 0;
  }

  add(number) {
    const newNode = new Node(number);

    if (this.head == null) {
      this.head = newNode;
      this.length++;
    } else {
      let currentNode = this.head;
      while (currentNode.next_node) {
        currentNode = currentNode.next_node;
      }
      currentNode.next_node = newNode;
      this.length++;
    }
  }

  addAt(index, item) {
    const newNode = new Node(item);
    const nodeAtIndex = this.call_get_node(index);

    if (this.head == null) {
      this.head = newNode;
      this.length++;
      return;
    }

    if (nodeAtIndex == null) {
      return null;
    }

    if (index == 0) {
      this.head = newNode;
      this.head.next_node = nodeAtIndex;
      this.length++;
      //   console.log("line 39 this.head = ", this.head);
    } else {
      const previousNode = this.call_get_node(index - 1); // ? gets the previous node of the requested node at that index
      if (previousNode == null) {
        return null;
      }
      previousNode.next_node = new Node(item, previousNode.next_node);
      this.length++;
      //   console.log("line 42 this.head = ", this.head);
    }
  }

  remove(index) {
    const nodeAtIndex = this.call_get_node(index);

    if (nodeAtIndex == null) {
      return null;
    }

    if (index == 0) {
      this.head = this.head.next_node;
      this.length--;
      //   console.log("line 39 this.head = ", this.head);
    } else {
      const previousNode = this.call_get_node(index - 1); // ? gets the previous node of the requested node at that index
      if (previousNode == null) {
        return null;
      }
      previousNode.next_node = nodeAtIndex.next_node;
      this.length--;
      //   console.log("line 70 this.head = ", this.head);
    }
  }

  get(index) {
    return this.call_get_node(index).value;
  }

  #get_node(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let currentNode = this.head;
    if (index === 0) {
      return currentNode;
    }

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next_node;
    }
    return currentNode;
  }

  call_get_node(index) {
    return this.#get_node(index);
  }
}

//! add_at_from_empty_LinkedList: status OK
// const list = new LinkedList();
// console.log("this.head = ", list.head);
// console.log("this.length = ", list.length);
// list.addAt(0, 8);
// console.log("this.head = ", list.head);
// console.log(list.get(0)); // ? === 8;
// console.log("this.head = ", list.head);
// console.log("this.length = ", list.length); // ? === 1;
//--------------------------------------//
//! multiple_adds_and_gets: status OK
// const list = new LinkedList();
// console.log("this.head = ", list.head);
// console.log("this.length = ", list.length);
// list.add(8);
// console.log("this.head = ", list.head);
// list.add(3);
// console.log("this.head = ", list.head);
// list.addAt(1, 5);
// console.log("this.head = ", list.head);
// console.log(list.get(0)); //? === 8;
// console.log(list.get(1)); //? === 5;
// console.log(list.get(2)); //? === 3;
// console.log("this.head = ", list.head);
// console.log("this.length = ", list.length); // ? === 3;
// ---------------------------------------//

//! adds_gets_and_removes: status OK
// const list = new LinkedList();
// console.log("this.head = ", list.head);
// console.log("this.length = ", list.length);
// list.add(8);
// console.log("this.head = ", list.head);
// list.add(3);
// console.log("this.head = ", list.head);
// list.addAt(1, 5);
// console.log("this.head = ", list.head);
// list.addAt(2, 4);
// console.log("this.head = ", list.head);
// list.remove(1);
// console.log("this.head = ", list.head);
// console.log(list.get(0)); //?  === 8;
// console.log(list.get(1)); //?  === 4;
// console.log(list.get(2)); //?  === 3;
// console.log("this.head = ", list.head);
// console.log("this.length = ", list.length); // ? === 3;
//------------------------------------------//
module.exports = LinkedList;
