const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  array = [];


  push(/* element */) {
    this.array.push(arguments[0]);
      
    // remove line with error and write your code here
  }

  pop() {
      let item;
    if ( this.array.length == 0 ) {
        return undefined;
    } else {
        item = this.array.splice(-1,1);
        return parseInt(item.join(''));
    }
    
    // remove line with error and write your code here
  }

  peek() {
      let item;
      item = this.array[this.array.length-1];
      return item
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack
};
