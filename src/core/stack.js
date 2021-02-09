import {isArray} from '../type/index'

export class Stack {
  constructor (data) {
    if (isArray(data)) {
      this._data = data
      this._length = data.length
    }
    this._data = []
    this._length = 0
  }
  pop () {
    return this.data[this.length-1]
  }
  push (val) {
    this.data[this.length] = val;
    this.length += 1;
  }
  get length () {
    return this._length
  }
  set length (val) {
    return false
  }
}
