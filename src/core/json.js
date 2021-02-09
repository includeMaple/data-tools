import {isJSON, isObject, isFunction, getType, Stack} from '../type/index'
import {merge} from '../util/index'
import {Indentation} from '../methods/indentation'

// ---------config
// let options = {
//   data: [{}],
//   init: {
//     key1: true,
//     right: false,
//     key2: 80
//   },
//   filter: function () {} || Object,
//   update: function () {}
// }
// ----------methods

// init --> filter --> update
/**
 * 
 */
class Json {
  constructor (opt) {
    if (!this.isJSON(opt.data)) {
      return
    }
    this.opt = opt;
    this.data = opt.data;
    this.life()
  }
  life () {
    this.init()
    this.filter()
    this.update()
  }
  init () {}
  filter () {
    if (!this.opt.filter) return
    switch (getType(this.filter)) {
      case 'function':
        
        break;
      case 'object':
        break
      default:
        break;
    }
  }
  update () {}
  isJSON (data) {
    return isJSON(data||this.data)
  }/**
   * 
   * @param {*} data 
   * @param {*} isIndentation 
   * @param {*} opt 
   */
  stringify (data, isIndentation=false, opt) {
    if (!data) data = this.data
    if (!isIndentation) return JSON.stringify(this.data)
    opt = merge(['{', '}', '[', ']'], opt)
    return (new Indentation(JSON.stringify(data), opt))
  }
  parse (data, isIndentation=false) {
    if (!isIndentation) return JSON.parse(data)
  }
}
