"use strict";

function createNode(value) {
  return {
    value: value,
    next: null
  };
}

var linkedList = {
  head: null,
  addLast: function addLast(value) {
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
  addFirst: function addFirst(value) {
    this.head = new createNode(value, this.head);
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
  },
  searchValue: function searchValue(value) {
    var current = this.head;

    while (current) {
      if (current.value === value) {
        return current.value;
      }

      current = current.next;
    }

    return "Value not found";
  },
  searchIndex: function searchIndex(value) {
    var current = this.head;
    var index = 0;

    while (current) {
      if (current.value === value) {
        return index;
      }

      current = current.next;
      index++;
    }

    return -1;
  }
};
var list = linkedList;
list.addLast("Edward");
list.addLast("Yoan");
list.addLast("Arthur");
console.log(list.searchValue("Arthur"));
console.log(list.searchIndex("Arthur"));