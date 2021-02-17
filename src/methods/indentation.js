import {Stack} from '../core/index'

export class Indentation {
  constructor (str, opt) {
    this._stack = new Stack()
    this._str = str
    this._keyNum = 0

    this._opt = opt
    this._in = '  '
    this._newLine = '\n'
  }
  /**
   * @params {object} {
   *    opt:
   *    in:
   *    newline
   * }
   */
  set options (val) {
    this._opt = val.opt || this._opt
    this._in = val.in || this._in
    this._newLine = val._newLine || this._newLine
  }
  addIn (str, num, inStr) {
    inStr = inStr || this._in
    for (let j=0; j<num; j++){
      str = inStr + str
    }
    return str
  }
  getStr () {
    for (let i=0; i<this._str.length; i++) {
      // 1. value not in opt keys or values
      if (Object.values(this._opt).indexOf(this._str[i])<0 && Object.keys(this._opt).indexOf(this._str[i])<0) {
        this._stack.push(this._str[i])
      // 2. value in keys(left)
      // right: add newline, in
      } else if (this._str[i] in this._opt){
        this._keyNum ++
        this._stack.push(this._str[i])
        this._stack.push(this._newLine)
        this._stack.push(this.addIn('', this._keyNum))
        // 3. value in values(right)
      // left: add newline, in
      // right: check if ',',add newline after ',', else add newline, in
      } else {
        let tempStack = new Stack()
        tempStack.push(this._str[i])
        // left
        this._stack.push(this._newLine)
        this._stack.push(this.addIn('', this._keyNum-1))
        this._keyNum--

        let tempStr = ''
        /* eslint-disable */
        while (true) {
          let item = this._stack.pop()
          tempStack.push(item)
          if (item in this._opt) {
            while (tempStack.length) {
              tempStr += tempStack.pop()
            }
            // right
            if (this._str[i+1] === ',') {
              tempStr = tempStr + ',' + this._newLine
              i++
            } else if (Object.values(this._opt).indexOf(this._str[i+1])<0) {
              tempStr = tempStr + this._newLine

            }
            tempStr+=this.addIn('', this._keyNum)

            this._stack.push(tempStr)
            break
          }
        }
      }
    }
    return this._stack.pop()
  }
}