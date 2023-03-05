class _Node {
  val: any;
  next: node;
  prev: node;

  constructor(val: any) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

type node = null | _Node;

class DoublyLinkedList {
  head: node;
  tail: node;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
