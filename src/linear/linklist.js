import {addLog, isDef} from 'iface'


class Node{
  constructor (data) {
    this.data = data || null
    this.next = null
    this.pre = null
  }
}

// linklist with header
export class LinkList {
  constructor (max) {
    this._length = 0
    this._max = max || null
    let node = new Node()
    this.head = node
    this.tail = node
  }
  push (data) {
    let node = new Node(data)
    node.next = this.head.next
    node.pre = this.head
    this.head.next = node
  }
  pop () {
    if (this.isEmpty()) {
      addLog.add('stack is empty.', 'error')
      return false
    }
    let temp = this.tail
    this.tail = this.tail.pre
    this.tail.next = null
    this._length -= 1
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

// with header
export class DeList {}