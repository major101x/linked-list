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

  /* Returns head node of the list */
  head() {
    if (!this.headNode) {
      return null; // Return null if no nodes exist
    }
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

  /* Returns node at given index */
  at(index) {
    if (!this.headNode) {
      return new Error("No Nodes in list"); // Return null if no nodes exist
    }

    let count = 0;
    let pointer = this.headNode;
    while (index !== count) {
      if (pointer.next === null) {
        return new Error("Node does not exist");
      }
      pointer = pointer.next;
      count++;
    }
    return pointer;
  }

  /* Removes last node from the list */
  pop() {
    if (!this.headNode) {
      return new Error("No Nodes in list"); // Return null if no nodes exist
    } else if (this.headNode.next === null) {
      this.headNode = this.headNode.next; // Remove head node if only head node exists
    } else {
      let currPointer = this.headNode;
      let prevPointer = null;

      while (currPointer.next !== null) {
        prevPointer = currPointer;
        currPointer = currPointer.next;
      }

      /* Sets the next node of the previous node to the next
     node of the current node, which is null */
      prevPointer.next = currPointer.next;
    }
  }

  /* Checks if node exists on the list */
  contains(value) {
    let pointer = this.headNode;
    let matchFound = false;

    while (matchFound === false && pointer.next !== null) {
      if (pointer.value === value) {
        matchFound = true;
      } else {
        pointer = pointer.next;
      }
    }

    return matchFound;
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

console.log(list.head());

console.log(list.tail());

console.log(list.at(3));

list.pop();

console.log(list.contains("foo"));

console.log(list.tail());
