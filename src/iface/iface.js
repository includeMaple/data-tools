import {isUndefined, isFunction, isIface, isDefString, isObject} from '../type/index'
import {merge} from '../util/index'
import {addLog} from '../log/index'

const INTANCE_WARNING = `Interface cannot be invoked with 'new'. `
/**
 * crate interface object
 * @param {object} opt {
 *    props: [],
 *    methods: [],
 *    name: {string}
 * }
 */
function forInterface(opt) {
  this.methods = opt.methods || []
  this.props = opt.props || []
  this.base = opt.base || []
  this.name = opt.name
}
/**
 * Interface
 * @param {*} opt 
 */
function Iface (opt) {
  if (this instanceof Iface) {
    addLog.add(INTANCE_WARNING, 'error')
  }
  if (!isDefString(opt.name)) {
    addLog.add('Interface expect name.', 'error')
  }
  let inter = new forInterface(opt)
  if (!isObject(Iface.all)) Iface.all = {}
  Iface.all[inter.name] = inter
  inter.constructor = Iface
  return inter
}
/**
 * extend interface
 */
Iface.extends = function () {
  let tempOpt = {
    props: [],
    methods: [],
    base: [],
    name: ''
  }
  for (let i=0; i<arguments.length; i++) {
    let obj = arguments[i]
    if (isIface(obj)) {
      tempOpt.base.push(obj)
    } else {
      tempOpt.name = obj.name || tempOpt.name
    }
    tempOpt.props = merge(tempOpt.props, obj.props)
    tempOpt.methods = merge(tempOpt.methods, obj.methods)
  }
  return Iface(tempOpt)
}
/**
 * check interface
 * @param {*} obj: object
 * @param {*} iface interface
 * @return {boolean}
 */
Iface.ensure = function (obj, iface) {
  let {
    props,
    methods
  } = iface
  if (!props) props = []
  if (!methods) methods = []
  for (let item of props) {
    if (isUndefined(obj[item])){
      addLog.add(`interface ${iface.name} expect prop ${item}`)
      return false
    }
  }
  for (let item of methods) {
    if (!isFunction(obj[item])) {
      console.log(`interface ${iface.name} expect prop ${item}`)
      addLog.add(`interface ${iface.name} expect methods ${item}`)
      return false
    }
  }
  return true
}

export {
  Iface
}
