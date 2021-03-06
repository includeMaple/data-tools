// 后续从datatools删除，单独放一个项目
// 1、json
// 2、xml
// 3、file断点上传
// 以上都要基于数据结构与算法
import {isJSON, getType, isUndefined} from '../type/index'
import {Indentation} from '../methods/indentation'
import { addLog } from '../log/index'

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
export class Json {
  constructor (data) {
    if (!isUndefined(data)) {
      if (!isJSON(data)) {
        addLog.add('this is not json', 'error')
      }
      this.data = data
    }
  }
  deal () {
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
  // node, opt
  _filterNode() {
  }
  update () {}
  /**
   * 
   * @param {*} data 
   * @param {*} isIndentation 
   * @param {*} opt 
   */
  static stringify (data, isIndentation=false, opt) {
    if (!isJSON(data)) return 'data is not a json'
    if (!isIndentation) return JSON.stringify(data)
    opt = opt || {
      '{': '}',
      '[': ']'
    }
    return (new Indentation(JSON.stringify(data), opt)).getStr()
  }
  static parse (data, isIndentation=false) {
    if (!isIndentation) return JSON.parse(data)
  }
  // data, opt, deep=false, isOwn=true
  toJson () {
  }
}


// # Json
// ## interface
// ```javascipt
// {
//   methods: ['static stringify', 'static parse'],
//   name: 'jsonInterface'
// }
// ```
// ## json序列化
// 普通序列化
// ```javascript
// let str =Json.stringify(json)
// ```
// 给json序列化的同时添加缩进、换行
// ```javascript
//     let str =Json.stringify(json, true)
// ```