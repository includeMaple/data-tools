
import {Stack} from '../core/stack'
/**
 * undefined or null
 * @param {*} val value
 * @return {boolean}
 */
export const isDef = function (val) {
  return !(val === undefined || val === null)
}

/**
 * boolean
 * @param {*} val value
 * @return {boolean}
 */
export const isBoolean = function (val) {
  return typeof(val) === 'boolean'
}
/**
 * undefined
 * @param {*} val val
 */
export const isUndefined = function (val) {
  return typeof(val) === 'undefined'
}
/**
 * function
 * @param {*} val value
 * @return {boolean}
 */
export const isFunction = function (val) {
  return typeof(val) === 'function'
}

/**
 * number
 * @param {*} val value
 * @return {boolean}
 */
export const isNumber = function (val) {
  return typeof(val) === 'number'
}

/**
 * object
 * @param {*} val value
 * @return {boolean}
 */
export const isObject = function (val) {
  return Object.prototype.toString.apply(val) === '[object Object]'
}

/**
 * array
 * @param {*} val value
 */
export const isArray = function (val) {
  return Array.isArray(val)
}
/**
 * date
 * @param {*} val value
 */
export const isDate = function (val) {
  return Object.prototype.toString.apply(val) === '[object Date]'
}
/**
 * date
 * @param {*} val value
 */
export const isJSON = function (val) {
  try {
    JSON.stringify(val)
    return true
  } catch (error) {
    return false
  }
}
/**
 * stack
 * @param {*} val value
 */
export const isStack = function (val) {
  if (isDef(val)) return false
  return val.constructor === Stack
}

/**
 * return val type
 * @param {*} val
 * @return {string} lower
 */
export const getType = function (val) {
  if (isJSON(val)) return 'json'
  if (isStack(val)) return 'stack'
  let str = Object.prototype.toString.apply(val)
  return str.substring(6, str.length-2).toLowerCase()
}
