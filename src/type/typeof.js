
/**
 * undefined or null
 * @param {*} val value
 * @return {boolean}
 */
export const isDef = function (val) {
  return val === undefined || val === null
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
  return Object.prototype.toString(val) === '[object Object]'
}
