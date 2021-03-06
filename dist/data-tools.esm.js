/*!
 * data-tools.js v1.0.0
 * (c) 2021-2021 include maple
 * Released under the MIT License.
 */
import { addLog, isDef, isArray } from 'iface';

class Stack {
  constructor (max) {
    this._data = [];
    this._length = 0;
    this._max = max || null;
  }
  pop () {
    if (this.isEmpty()) {
      addLog.add('stack is empty.', 'error');
      return false
    }
    this._length -= 1;
    return this._data[this._length]
  }
  push (val) {
    if (this.isFull()){
      addLog.add('stack is full. ', 'error');
      return false
    }
    this._data[this._length] = val;
    this._length += 1;
    return this._length
  }
  isEmpty () {
    return this._length === 0
  }
  isFull () {
    if (!isDef(this._max) && this._length >= this._max)  return true
    return false
  }
  get length () {
    return this._length
  }
  set length (val) {
    return
  }
  get max () {
    return this._max
  }
  set max (val) {
    if (val < 0) {
      this._max = -1;
    } else if (val < this._length){
      this._length = val;
      this._max = val;
    }
  }
  get top () {
    if (this.isEmpty()) {
      return 'stack is empty'
    }
    return this._data[this._length-1]
  }
}

class Node{
  constructor (data) {
    this.data = data || null;
    this.next = null;
    this.pre = null;
  }
}

// linklist with header
class LinkList {
  constructor (max) {
    this._length = 0;
    this._max = max || null;
    let node = new Node();
    this.head = node;
    this.tail = node;
  }
  push (data) {
    let node = new Node(data);
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next = node;
  }
  pop () {
    if (this.isEmpty()) {
      addLog.add('stack is empty.', 'error');
      return false
    }
    let temp = this.tail;
    this.tail = this.tail.pre;
    this.tail.next = null;
    this._length -= 1;
    return temp
  }
  top () {
    return this.tail
  }
  isEmpty () {
    return this._length === 0
  }
  isFull () {
    if (!isDef(this._max) && this._length >= this._max) return true
    return false
  }
  get length () {
    return this._length
  }
  set length (val) {
    return
  }
}

let Deque = LinkList;

var index = {
  Stack,
  Deque,
  isArray
};

export default index;
