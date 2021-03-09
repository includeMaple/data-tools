/*!
 * data-tools.js v1.0.0
 * (c) 2021-2021 include maple
 * Released under the MIT License.
 */
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

/**
 * undefined or null
 * @param {*} val value
 * @return {boolean}
 */
const isDef = function (val) {
  return !(val === undefined || val === null)
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
 * array
 * @param {*} val value
 */
const isArray = function (val) {
  return Array.isArray(val)
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

class CreateConfig {
  constructor (opt) {
    this.opt = {
      newLine: '\n',
      lang: 'javascript',
      type: 'md'
    };
    opt && this.setOptions(opt);
    this.config = this[this.opt.type]();
  }
  setOptions (opt) {
    this.opt = Object.assign({}, this.opt, opt);
  }
  md () {
    return [
      {
        key: 'lev1',
        header: '# ',
        tail: this.opt.newLine
      },
      {
        key: 'lev2',
        header: '## ',
        tail: this.opt.newLine
      },
      {
        key: 'name',
        header: '### ',
        tail: this.opt.newLine
      },
      {
        key: 'params',
        header: '`@params ',
        tail: '`'+this.opt.newLine,
        isArray: true
      },
      {
        key: 'return',
        header: '`@return ',
        tail: '`'+this.opt.newLine,
        isArray: true
      },
      {
        key: 'description',
        header: '',
        tail: this.opt.newLine + this.opt.newLine
      },
      {
        key: 'example',
        header: '```' + this.opt.lang + this.opt.newLine,
        tail: this.opt.newLine + '```' + this.opt.newLine
      }
    ]
  }
}

(new CreateConfig()).config;

class Stack {
  constructor (max) {
    this._data = [];
    this._length = 0;
    this._max = max || null;
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
    if (!isDef(this._max) && this._length >= this._max)  return true
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

class Node{
  constructor (data) {
    this.data = data || null;
    this.next = null;
    this.pre = null;
  }
}

// linklist with header
class LinkList {
  constructor (max) {
    this._length = 0;
    this._max = max || null;
    let node = new Node();
    this.head = node;
    this.tail = node;
  }
  push (data) {
    let node = new Node(data);
    node.next = this.head.next;
    node.pre = this.head;
    this.head.next = node;
  }
  pop () {
    if (this.isEmpty()) {
      addLog.add('stack is empty.', 'error');
      return false
    }
    let temp = this.tail;
    this.tail = this.tail.pre;
    this.tail.next = null;
    this._length -= 1;
    return temp
  }
  top () {
    return this.tail
  }
  isEmpty () {
    return this._length === 0
  }
  isFull () {
    if (!isDef(this._max) && this._length >= this._max) return true
    return false
  }
  get length () {
    return this._length
  }
  set length (val) {
    return
  }
}

let Deque = LinkList;

var index = {
  Stack,
  Deque,
  isArray
};

export default index;
