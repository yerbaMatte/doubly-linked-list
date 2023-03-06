"use strict";
class _Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        const newNode = new _Node(val);
        if (this.head === null || this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return undefined;
        const poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (this.length === 0)
            return undefined;
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        const newNode = new _Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(ind) {
        let current;
        if (ind < 0 || ind >= this.length)
            return null;
        if (ind <= this.length / 2) {
            let counter = 0;
            current = this.head;
            while (counter !== ind) {
                current = current.next;
                counter++;
            }
        }
        else {
            let counter = this.length - 1;
            current = this.tail;
            while (counter !== ind) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    set(ind, val) {
        let foundNode = this.get(ind);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(ind, val) {
        if (ind < 0 || ind >= this.length)
            return null;
        if (ind === 0)
            return this.unshift(val);
        if (ind === this.length)
            return this.push(val);
        let newNode = new _Node(val);
        let beforeNode = this.get(ind - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
}
const newList = new DoublyLinkedList();
newList.push('Apple');
newList.push('Mango');
newList.push('Banana');
