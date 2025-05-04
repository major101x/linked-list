console.log("Console working!");

class LinkedList {
  /* Adds new node to the end of the list */
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;

      while (tmp.next) {
        tmp = tmp.next;
      }

      tmp.next = new Node(value);
    }
  }

  /* Adds new node to the beginning of the list */
  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;

      this.head = new Node(value);

      this.head.next = tmp;
    }
  }

  /* Returns total number of nodes in the list */
  size() {
    if (!this.head) {
      return 0;
    } else {
      let count = 1;

      let pointer = this.head;

      while (pointer !== null) {
        pointer = pointer.next;
        count++;
      }

      return count;
    }
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

list.prepend("foo");

console.log(list.size());

console.log(list.head);

// console.log(list);
