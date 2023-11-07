class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.head = node;
      this.next = this.head;
    }
    this.size++;
  }
  printList() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = " ";
      while (curr) {
        list += `${curr.value} `;
        curr = curr.next;
      }
      console.log(list);
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
}

const list = new LinkedList();
console.log(list.getSize());
console.log(list.isEmpty());
list.prepend(10);
// list.printList();

list.prepend(20);
list.prepend(30);

console.log(list.getSize());
console.log(list.isEmpty());
list.printList();
