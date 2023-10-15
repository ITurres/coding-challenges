class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(root = null) {
    this.root = root;
  }

  insert(node) {
    this.root = this.insertHelper(node, this.root);
  }

  preOrder(node = this.root) {
    if (!node) return "";

    return `${node.data} ${this.preOrder(node.left)}${this.preOrder(
      node.right
    )}`;
  }

  insertHelper(node, root) {
    if (!root) return node;

    if (root.data >= node.data) {
      root.left = this.insertHelper(node, root.left);
    } else {
      root.right = this.insertHelper(node, root.right);
    }

    return root;
  }
}

function binarySearchTree(array) {
  const tree = new BST();

  array.forEach((num) => tree.insert(new Node(num)));

  return tree.preOrder();
}

console.log(binarySearchTree([8, 3, 10, 1, 6, 14, 4, 7, 13]));
// ? => "8 3 1 6 4 7 10 14 13"

module.exports = binarySearchTree;
