console.log("Console working!");

class LinkedList {
  /* Adds new node to the end of the list */
  append(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let tmp = this.head;

      while (tmp.next !== null) {
        tmp = tmp.next;
      }

      tmp.next = new Node(value);
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

console.log(list);
