class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    // list is empty
    this.head = null;
    // size of list is 0 by default
    this.size = 0;
  }

  // Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  // Insert last node

  // Insert at index

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
}
const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);

console.log(ll);
