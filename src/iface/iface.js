import {isUndefined} from '../type/index'

const INTANCE_WARNING = `Interface cannot be invoked with 'new'. `
/**
 * crate interface object
 * @param {object} opt {
 *    props: [],
 *    methods: []
 * }
 */
function forInterface(opt) {
  this.opt = opt
}
/**
 * Interface
 * @param {*} opt 
 */
function Iface (opt) {
  if (this instanceof Iface) {
    throw new Error(INTANCE_WARNING)
  }
  let inter = new forInterface(opt)
  inter.constructor = Iface
  return inter
}
Iface.extends = function () {
  let tempOpt = {
    props: [],
    methods: []
  }
  for (let i=0; i<arguments.length-1; i++) {
    if (arguments.opt && !isUndefined(arguments.opt.methods)) tempOpt.methods.concat(arguments.opt.methods)
    if (arguments.opt && !isUndefined(arguments.opt.props)) tempOpt.methods.concat(arguments.opt.methods)
  }
  return Iface(tempOpt)
}
Iface.ensure = function () {
  return true
}

export {
  Iface
}
