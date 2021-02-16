import {addLog} from '../log/index'

export class Stack {
  constructor (max) {
    this._data = []
    this._length = 0
    this._max = max || 100000
  }
  pop () {
    if (this.isEmpty()) {
      addLog.add('stack is empty.', 'error')
      return false
    }
    this._length -= 1
    return this._data[this._length]
  }
  push (val) {
    if (this.isFull()){
      addLog.add('stack is full. ', 'error')
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
    if (this._length >= this._max) return true
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
      this._max = -1
    } else if (val < this._length){
      this._length = val
      this._max = val
    }
  }
}
