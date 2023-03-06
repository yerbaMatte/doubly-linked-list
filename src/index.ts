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

  public get(ind: number): _Node<T> | null {
    let current;
    if (ind < 0 || ind >= this.length) return null;
    if (ind <= this.length / 2) {
      let counter: number = 0;
      current = this.head;
      while (counter !== ind) {
        current = current!.next;
        counter++;
      }
    } else {
      let counter: number = this.length - 1;
      current = this.tail;
      while (counter !== ind) {
        current = current!.prev;
        counter--;
      }
    }
    return current;
  }

  public set(ind: number, val: T): boolean {
    let foundNode = this.get(ind);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  public insert(ind: number, val: T) {
    if (ind < 0 || ind >= this.length) return null;
    if (ind === 0) return this.unshift(val);
    if (ind === this.length) return this.push(val);
    let newNode = new _Node(val);
    let beforeNode = this.get(ind - 1);
    let afterNode = beforeNode!.next;
    beforeNode!.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode!.prev = newNode;
    this.length++;
    return true;
  }
}

const newList = new DoublyLinkedList();

newList.push('Apple');
newList.push('Mango');
newList.push('Banana');
