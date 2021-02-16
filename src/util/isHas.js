import {dispatch} from './dispatch'
import {getType} from '../type/index'
// /**
//  * is obj1 include obj2
//  * @param {*} obj1 
//  * @param {*} obj2 
//  * @param {boolean} isOwn: check own only or check prototype
//  * @return {boolean}
//  */
// export function isHas (obj1, obj2, isOwn=true) {
// }
/**
 * is obj2 has obj1
 */
export class IsHas{
  /**
   * 
   * @param {*} obj1 
   * @param {*} obj2 
   * @param {*} isPrototype :as isPrototype
   */
  constructor (obj1, obj2, isPrototype=false) {
    this.obj1 = obj1
    this.obj2 = obj2
    this.isPrototype = isPrototype
    this._check = this._dispatch()
  }
  _dispatch () {
    let dis = {
      header: 'check',
      tail: getType(this.obj1, true) + {true:'Deep', false: ''}[this.isPrototype]
    }
    return dispatch(dis, this)
  }
  get check () {
    return this._check
  }
  set check (val) {return}
  checkElse () {
    return false
  }
  checkObject () {
    for (let k of Object.keys(this.obj1)) {
      if (this.obj1[k] !== this.obj2[k]) return false
    }
    return true
  }
  checkArray () {
    for (let item of this.obj1) {
      if (this.obj2.indexOf(item) < 0) return false
    }
    return true
  }
  checkObjectDeep () {
    for (let k in this.obj1) {
      if (this.obj1[k] !== this.obj2[k]) return false
    }
    return true
  }
  checkArrayDeep () {
    for (let k in this.obj1) {
      if (this.obj2.indexOf(this.obj1[k]) < 0) return false
    }
    return true
  }
}
