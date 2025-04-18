"use strict";

function createNode(value) {
  return {
    value: value,
    next: null
  };
}

var linkedList = {
  head: null,
  add: function add(value) {
    var newNode = createNode(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      var current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = newNode;
    }
  },
  removeLast: function removeLast() {
    if (this.head === null) {
      return;
    }

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    var current = this.head;

    while (current.next.next !== null) {
      current = current.next;
    }

    current.next = null;
  },
  removeFirst: function removeFirst() {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
  },
  listCount: function listCount() {
    var count = 0;
    var current = this.head;

    while (current !== null) {
      current = current.next;
      count++;
    }

    return count;
  },
  print: function print() {
    if (this.head === null) {
      console.log("List is emtpy");
      return;
    }

    ;
    var current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
};
var list = linkedList;
list.add("Edward");
list.add("Yoan");
list.add("Arthur");