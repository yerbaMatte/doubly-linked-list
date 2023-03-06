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

  pop() {
    if (this.length === 0) return undefined;
    const lastNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = lastNode.prev;
      this.tail.next = null;
    }
    this.length--;
    return lastNode;
  }
}

const newList = new DoublyLinkedList();

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}

let myArray: number[];
let myArray2: Array<number>;

type JobRun = {
  job: any;
  onComplete: (cb: (job: any) => void) => void;
};

let x: any = 'hello';
let y: number = x.length;
