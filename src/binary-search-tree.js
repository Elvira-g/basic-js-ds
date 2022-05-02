const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.main = null;
    // this.parent = null;
    // this.left = null;
    // this.right = null;
}

root() {
  return this.main;
  // remove line with error and write your code here
}

add(/* data */) {
    let value = arguments[0];
    this.main = addWithin(this.main, value);

    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }

      return node;
    }
  // remove line with error and write your code here
}

has(/* data */) {
    let value = arguments[0];

    return searchWithin(this.main, value);

    function searchWithin(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      return value < node.data? 
        searchWithin(node.left, value) : 
        searchWithin(node.right, value);
    }
  // remove line with error and write your code here
}

find(/* data */) {
    let value = arguments[0];
    return searchWithin(this.main, value);

    function searchWithin(node, value) {
        if (!node) {
          return null;
        }

        if (node.data === value) {
          return node;
        }

        return value < node.data ? 
          searchWithin(node.left, value) : 
          searchWithin(node.right, value);
      }
  // remove line with error and write your code here
}

remove(/* data */) {
    let value = arguments[0];

    this.main = removeNode(this.main, value);

    function removeNode(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (node.data < value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        // equal
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }
  // remove line with error and write your code here
}

min() {
        if (!this.main) {
    return null;
  }

  let node = this.main;
  while (node.left) {
    node = node.left;
  }

  return node.data;
  // remove line with error and write your code here
}

max() {
    if (!this.main) {
        return null;
      }

      let node = this.main;
      while (node.right) {
        node = node.right;
      }

      return node.data;
  // remove line with error and write your code here
}
}

module.exports = {
  BinarySearchTree
};