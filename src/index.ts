class _Node<T> {
  public val: T;
  public next: _Node<T> | null;
  public prev: _Node<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  private head: _Node<T> | null;
  private tail: _Node<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  public push(val: T): DoublyLinkedList<T> {
    const newNode = new _Node(val);
    if (this.head === null || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  public pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode!.prev;
      this.tail!.next = null;
      poppedNode!.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  public shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead!.next;
      this.head!.prev = null;
      oldHead!.next = null;
    }
    this.length--;
    return oldHead;
  }

  public unshift(val: T): DoublyLinkedList<T> {
    const newNode = new _Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  public get(ind: number) {}
}

const newList = new DoublyLinkedList();
