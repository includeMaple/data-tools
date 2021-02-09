import {getType} from '../type/index'

/**
 * merge
 * @param {boolean||undefined} deep 
 */
export const merge = function (deep=false) {
  let temp
  switch (getType(sarguments[0])) {
    case 'array':
      temp = []
      if (!deep) {
        for (let i=0; i<arguments.length; i++) {
          temp.concat(arguments[i])
        }
      }
      break;
    case 'object':
      temp = {}
      if (!deep) {
        for (let i=0; i<arguments.length;i++) {
          Object.assign(temp, arguments[i])
        }
      }
      break;
    default:
      break;
  }
  return temp;
}