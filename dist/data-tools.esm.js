/*!
 * data-tools.js v1.0.0
 * (c) 2021-2021 include maple
 * Released under the MIT License.
 */
const INTANCE_WARNING = `Interface cannot be invoked with 'new'. `;
/**
 * crate interface object
 * @param {object} opt {
 *    props: [],
 *    methods: [],
 *    name: {string}
 * }
 */
function forInterface(opt) {
  this.methods = opt.methods || [];
  this.props = opt.props || [];
  this.base = opt.base || [];
  this.name = opt.name;
}
/**
 * Interface
 * @param {*} opt 
 */
function Iface (opt) {
  if (this instanceof Iface) {
    addLog.add(INTANCE_WARNING, 'error');
  }
  if (!isDefString(opt.name)) {
    addLog.add('Interface expect name.', 'error');
  }
  let inter = new forInterface(opt);
  if (!isObject(Iface.all)) Iface.all = {};
  Iface.all[inter.name] = inter;
  inter.constructor = Iface;
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
  };
  for (let i=0; i<arguments.length; i++) {
    let obj = arguments[i];
    if (isIface(obj)) {
      tempOpt.base.push(obj);
    } else {
      tempOpt.name = obj.name || tempOpt.name;
    }
    tempOpt.props = merge(tempOpt.props, obj.props);
    tempOpt.methods = merge(tempOpt.methods, obj.methods);
  }
  return Iface(tempOpt)
};
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
  } = iface;

  if (!props) props = [];
  if (!methods) methods = [];
  for (let item of props) {
    if (item.indexOf('static ') === 0) {
      // static
      if (isUndefined(obj.constructor[item.split(' ')[1]])) {
        addLog.add(`interface ${iface.name} expect prop ${item}`);
        return false
      }
    } else if (item.indexOf('class ') === 0){
      // class
      if (isUndefined(obj[item.split(' ')[1]])) {
        addLog.add(`interface ${iface.name} expect prop ${item}`);
        return false
      }
    } else {
      // normal
      if (isUndefined(obj[item])){
        addLog.add(`interface ${iface.name} expect prop ${item}`);
        return false
      }
    }
  }
  for (let item of methods) {
    if (item.indexOf('static ') === 0) {
      // static
      if (!isFunction(obj.constructor[item.split(' ')[1]])) {
        addLog.add(`interface ${iface.name} expect methods ${item}`);
        return false
      }
    } else if (item.indexOf('class ') === 0) {
      // class
      if (!isFunction(obj[item.split(' ')[1]])) {
        addLog.add(`interface ${iface.name} expect methods ${item}`);
        return false
      }
    } else {
      // normal
      if (!isFunction(obj[item])) {
        addLog.add(`interface ${iface.name} expect methods ${item}`);
        return false
      }
    }
  }
  return true
};

/**
 * string but not ''
 * @param {*} val 
 * @return {boolean}
 */
const isDefString = function (val) {
  return typeof(val) === 'string' && val.length > 0
};
/**
 * undefined
 * @param {*} val val
 */
const isUndefined = function (val) {
  return typeof(val) === 'undefined'
};
/**
 * function
 * @param {*} val value
 * @return {boolean}
 */
const isFunction = function (val) {
  return typeof(val) === 'function'
};

/**
 * object
 * @param {*} val value
 * @return {boolean}
 */
const isObject = function (val) {
  return Object.prototype.toString.apply(val) === '[object Object]'
};
/**
 * date
 * @param {*} val value
 */
const isJSON = function (val) {
  try {
    JSON.stringify(val);
    return true
  } catch (error) {
    return false
  }
};
/**
 * iface
 * @param {*} val 
 */
const isIface = function (val) {
  return val.constructor === Iface
};

/**
 * return val type
 * @param {*} val
 * @return {string} lower
 */
const getType = function (val, firstUpper=false) {
  let str = Object.prototype.toString.apply(val).slice(8, -1).toLowerCase();
  if (firstUpper) {
    str = str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str
  // }
};

/**
 * merge
 */
const merge = function () {
  let temp;
  switch (getType(arguments[0])) {
    case 'array':
      temp = [];
      for (let i=0; i<arguments.length; i++) {
        for (let j=0; j<arguments[i].length; j++) {
          if (temp.indexOf(arguments[i][j])<0) {
            temp.push(arguments[i][j]);
          }
        }
      }
      break;
    case 'object':
      temp = {};
      for (let i=0; i<arguments.length;i++) {
        Object.assign(temp, arguments[i]);
      }
      break;
  }
  return temp;
};

/**
 * function dispatch
 * @param {string|object} name function name, if object, {header:'h', name: 's'}, use "header + name" as function name
 * @param {*} that this
 * @param {array} params 
 */
function dispatch(name, that, params=[]) {
  // name is object
  if (isObject(name)) {
    let {
      header,
      tail
    } = name;
    let funName = header + tail;
    if (that && that[funName]) {
      funName = isFunction(that[funName]) ? header + tail: header + 'Else';
      if (isFunction(that[funName])) return that[funName](...params)
    }
    return false
  }
  // name is string
  if (that && that[name] && isFunction([name])) return that[name](...params)
  return false
}

class AddLog {
  constructor () {
  }
  add (content, type='danger', platforms='console') {
    this.content = content;
    this.type = type;
    this.platforms = platforms;
    this._dispatch();
  }
  _dispatch () {
    dispatch({
      header: this.platforms,
      tail: this.type.charAt(0).toUpperCase() + this.type.slice(1)
    }, this);
  }
  setOptions (opt) {
    if (opt.type) this.type = opt.type;
    if (opt.platforms) this.platforms = opt.platforms;
  }
  consoleInfo() {
    console.log(this.content);
  }
  consoleDanger () {
    console.error(this.content);
  }
  consoleError () {
    throw new Error(this.content)
  }
}
let addLog = new AddLog();

class Stack {
  constructor (max) {
    this._data = [];
    this._length = 0;
    this._max = max || 100000;
  }
  pop () {
    if (this.isEmpty()) {
      addLog.add('stack is empty.', 'error');
      return false
    }
    this._length -= 1;
    return this._data[this._length]
  }
  push (val) {
    if (this.isFull()){
      addLog.add('stack is full. ', 'error');
      return false
    }
    this._data[this._length] = val;
    this._length += 1;
    return this._length
  }
  isEmpty () {
    return this._length === 0
  }
  isFull () {
    if (this._length >= this._max) return true
    return false
  }
  get length () {
    return this._length
  }
  set length (val) {
    return
  }
  get max () {
    return this._max
  }
  set max (val) {
    if (val < 0) {
      this._max = -1;
    } else if (val < this._length){
      this._length = val;
      this._max = val;
    }
  }
  get top () {
    if (this.isEmpty()) {
      return 'stack is empty'
    }
    return this._data[this._length-1]
  }
}

class ExStack extends Stack{
  constructor (max) {
    super(max);
  }
  clear () {}
  join () {}
}

class Indentation {
  constructor (str, opt) {
    this._stack = new Stack();
    this._str = str;
    this._keyNum = 0;

    this._opt = opt;
    this._in = '  ';
    this._newLine = '\n';
  }
  /**
   * @params {object} {
   *    opt:
   *    in:
   *    newline
   * }
   */
  set options (val) {
    this._opt = val.opt || this._opt;
    this._in = val.in || this._in;
    this._newLine = val._newLine || this._newLine;
  }
  addIn (str, num, inStr) {
    inStr = inStr || this._in;
    for (let j=0; j<num; j++){
      str = inStr + str;
    }
    return str
  }
  getStr () {
    for (let i=0; i<this._str.length; i++) {
      // 1. value not in opt keys or values
      if (Object.values(this._opt).indexOf(this._str[i])<0 && Object.keys(this._opt).indexOf(this._str[i])<0) {
        this._stack.push(this._str[i]);
      // 2. value in keys(left)
      // right: add newline, in
      } else if (this._str[i] in this._opt){
        this._keyNum ++;
        this._stack.push(this._str[i]);
        this._stack.push(this._newLine);
        this._stack.push(this.addIn('', this._keyNum));
        // 3. value in values(right)
      // left: add newline, in
      // right: check if ',',add newline after ',', else add newline, in
      } else {
        let tempStack = new Stack();
        tempStack.push(this._str[i]);
        // left
        this._stack.push(this._newLine);
        this._stack.push(this.addIn('', this._keyNum-1));
        this._keyNum--;

        let tempStr = '';
        /* eslint-disable */
        while (true) {
          let item = this._stack.pop();
          tempStack.push(item);
          if (item in this._opt) {
            while (tempStack.length) {
              tempStr += tempStack.pop();
            }
            // right
            if (this._str[i+1] === ',') {
              tempStr = tempStr + ',' + this._newLine;
              i++;
            } else if (Object.values(this._opt).indexOf(this._str[i+1])<0) {
              tempStr = tempStr + this._newLine;

            }
            tempStr+=this.addIn('', this._keyNum);

            this._stack.push(tempStr);
            break
          }
        }
      }
    }
    return this._stack.pop()
  }
}

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
  constructor (data) {
    if (!isUndefined(data)) {
      if (!isJSON(data)) {
        addLog.add('this is not json', 'error');
      }
      this.data = data;
    }
  }
  deal () {
    this.init();
    this.filter();
    this.update();
  }
  init () {}
  filter () {
    if (!this.opt.filter) return
    switch (getType(this.filter)) {
          }
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
    };
    return (new Indentation(JSON.stringify(data), opt)).getStr()
  }
  static parse (data, isIndentation=false) {
    if (!isIndentation) return JSON.parse(data)
  }
}

var index = {
  Stack,
  Iface,
  Json,
  ExStack
};

export default index;
