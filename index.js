console.log("Console working!");

class LinkedList {
  /* Adds new node to the end of the list */
  append(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
    } else {
      let tmp = this.headNode;

      while (tmp.next) {
        tmp = tmp.next;
      }

      tmp.next = new Node(value);
    }
  }

  /* Adds new node to the beginning of the list */
  prepend(value) {
    if (!this.headNode) {
      this.headNode = new Node(value);
    } else {
      let tmp = this.headNode;

      this.headNode = new Node(value);

      this.headNode.next = tmp;
    }
  }

  /* Returns total number of nodes in the list */
  size() {
    if (!this.headNode) {
      return 0;
    } else {
      let count = 1;

      let pointer = this.headNode;

      while (pointer.next !== null) {
        count++;
        pointer = pointer.next;
      }

      return count;
    }
  }

  head() {
    return this.headNode;
  }

  /* Returns tail node of the list */
  tail() {
    let tail = this.headNode; // Tail node is head node if only one node exists

    if (!tail) {
      return null; // Tail node is null if no nodes exist
    } else {
      while (tail.next !== null) {
        tail = tail.next;
      }

      return tail;
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

// list.append("dog");
// list.append("cat");
// list.append("parrot");
// list.append("hamster");
// list.append("snake");
// list.append("turtle");

// list.prepend("foo");

console.log(list.size());

console.log(list.head());

console.log(list.tail());
