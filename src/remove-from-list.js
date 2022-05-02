const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(/* l, k */) {
  let list = arguments[0];
  let num = arguments[1];

  let current = this.head;
  let index = 0;

  while ( current ) {
      if ( current.value === num ) {
          index = index
          if ( index === 0 ) {
              this.head = current.head;
          } else {
              let prev = null;
              let indx = 0;
              while (indx < index) {
                  prev = current;
                  current = current.next;
                  indx++;
              }
              prev.next = current.next;
          }
          this.length--;
      }
      current = current.next;
      index++;
  }
  return current.value;
  // remove line with error and write your code here
}

module.exports = {
  removeKFromList
};
