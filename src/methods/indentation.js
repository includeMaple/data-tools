import {isObject} from '../type/index'
import {objectToArray} from '../util/index'
import {Stack} from '../type/index'
export class Indentation {
  constructor (str, opt) {
    if (isObject(opt)) {
      this.opt = objectToArray(opt)
    }
    if (!this.checkOpt()) {
      return
    }
  }
  checkOpt () {
    return this.opt % 2 === 0
  }
  getStr () {
    let stack = new Stack()
    let str = JSON.stringify(this.data)
    for (let i=0; i<str.length; i++) {
      console.log(stack)
    }
  }
}