/*!
 * data-tools.js v1.0.0
 * (c) 2021-2021 include maple
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.dataTools = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var AddLog = /*#__PURE__*/function () {
    function AddLog() {
      _classCallCheck(this, AddLog);
    }

    _createClass(AddLog, [{
      key: "add",
      value: function add(content) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'danger';
        var platforms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'console';
        this.content = content;
        this.type = type;
        this.platforms = platforms;

        this._dispatch();
      }
    }, {
      key: "_dispatch",
      value: function _dispatch() {
        dispatch({
          header: this.platforms,
          tail: this.type.charAt(0).toUpperCase() + this.type.slice(1)
        }, this);
      }
    }, {
      key: "setOptions",
      value: function setOptions(opt) {
        if (opt.type) this.type = opt.type;
        if (opt.platforms) this.platforms = opt.platforms;
      }
    }, {
      key: "consoleInfo",
      value: function consoleInfo() {
        console.log(this.content);
      }
    }, {
      key: "consoleDanger",
      value: function consoleDanger() {
        console.error(this.content);
      }
    }, {
      key: "consoleError",
      value: function consoleError() {
        throw new Error(this.content);
      }
    }]);

    return AddLog;
  }();

  var addLog = new AddLog();

  /**
   * undefined or null
   * @param {*} val value
   * @return {boolean}
   */
  var isDef = function isDef(val) {
    return !(val === undefined || val === null);
  };
  /**
   * function
   * @param {*} val value
   * @return {boolean}
   */

  var isFunction = function isFunction(val) {
    return typeof val === 'function';
  };
  /**
   * object
   * @param {*} val value
   * @return {boolean}
   */

  var isObject = function isObject(val) {
    return Object.prototype.toString.apply(val) === '[object Object]';
  };
  /**
   * array
   * @param {*} val value
   */

  var isArray = function isArray(val) {
    return Array.isArray(val);
  };

  /**
   * function dispatch
   * @param {string|object} name function name, if object, {header:'h', name: 's'}, use "header + name" as function name
   * @param {*} that this
   * @param {array} params 
   */

  function dispatch(name, that) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    // name is object
    if (isObject(name)) {
      var header = name.header,
          tail = name.tail;
      var funName = header + tail;

      if (that && that[funName]) {
        funName = isFunction(that[funName]) ? header + tail : header + 'Else';
        if (isFunction(that[funName])) return that[funName].apply(that, _toConsumableArray(params));
      }

      return false;
    } // name is string


    if (that && that[name] && isFunction([name])) return that[name].apply(that, _toConsumableArray(params));
    return false;
  }

  var CreateConfig = /*#__PURE__*/function () {
    function CreateConfig(opt) {
      _classCallCheck(this, CreateConfig);

      this.opt = {
        newLine: '\n',
        lang: 'javascript',
        type: 'md'
      };
      opt && this.setOptions(opt);
      this.config = this[this.opt.type]();
    }

    _createClass(CreateConfig, [{
      key: "setOptions",
      value: function setOptions(opt) {
        this.opt = Object.assign({}, this.opt, opt);
      }
    }, {
      key: "md",
      value: function md() {
        return [{
          key: 'lev1',
          header: '# ',
          tail: this.opt.newLine
        }, {
          key: 'lev2',
          header: '## ',
          tail: this.opt.newLine
        }, {
          key: 'name',
          header: '### ',
          tail: this.opt.newLine
        }, {
          key: 'params',
          header: '`@params ',
          tail: '`' + this.opt.newLine,
          isArray: true
        }, {
          key: 'return',
          header: '`@return ',
          tail: '`' + this.opt.newLine,
          isArray: true
        }, {
          key: 'description',
          header: '',
          tail: this.opt.newLine + this.opt.newLine
        }, {
          key: 'example',
          header: '```' + this.opt.lang + this.opt.newLine,
          tail: this.opt.newLine + '```' + this.opt.newLine
        }];
      }
    }]);

    return CreateConfig;
  }();

  new CreateConfig().config; // markdown 好后请重构代码

  var Stack = /*#__PURE__*/function () {
    function Stack(max) {
      _classCallCheck(this, Stack);

      this._data = [];
      this._length = 0;
      this._max = max || null;
    }

    _createClass(Stack, [{
      key: "pop",
      value: function pop() {
        if (this.isEmpty()) {
          addLog.add('stack is empty.', 'error');
          return false;
        }

        this._length -= 1;
        return this._data[this._length];
      }
    }, {
      key: "push",
      value: function push(val) {
        if (this.isFull()) {
          addLog.add('stack is full. ', 'error');
          return false;
        }

        this._data[this._length] = val;
        this._length += 1;
        return this._length;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this._length === 0;
      }
    }, {
      key: "isFull",
      value: function isFull() {
        if (!isDef(this._max) && this._length >= this._max) return true;
        return false;
      }
    }, {
      key: "length",
      get: function get() {
        return this._length;
      },
      set: function set(val) {
        return;
      }
    }, {
      key: "max",
      get: function get() {
        return this._max;
      },
      set: function set(val) {
        if (val < 0) {
          this._max = -1;
        } else if (val < this._length) {
          this._length = val;
          this._max = val;
        }
      }
    }, {
      key: "top",
      get: function get() {
        if (this.isEmpty()) {
          return 'stack is empty';
        }

        return this._data[this._length - 1];
      }
    }]);

    return Stack;
  }();

  var Node = function Node(data) {
    _classCallCheck(this, Node);

    this.data = data || null;
    this.next = null;
    this.pre = null;
  }; // linklist with header


  var LinkList = /*#__PURE__*/function () {
    function LinkList(max) {
      _classCallCheck(this, LinkList);

      this._length = 0;
      this._max = max || null;
      var node = new Node();
      this.head = node;
      this.tail = node;
    }

    _createClass(LinkList, [{
      key: "push",
      value: function push(data) {
        var node = new Node(data);
        node.next = this.head.next;
        node.pre = this.head;
        this.head.next = node;
      }
    }, {
      key: "pop",
      value: function pop() {
        if (this.isEmpty()) {
          addLog.add('stack is empty.', 'error');
          return false;
        }

        var temp = this.tail;
        this.tail = this.tail.pre;
        this.tail.next = null;
        this._length -= 1;
        return temp;
      }
    }, {
      key: "top",
      value: function top() {
        return this.tail;
      }
    }, {
      key: "isEmpty",
      value: function isEmpty() {
        return this._length === 0;
      }
    }, {
      key: "isFull",
      value: function isFull() {
        if (!isDef(this._max) && this._length >= this._max) return true;
        return false;
      }
    }, {
      key: "length",
      get: function get() {
        return this._length;
      },
      set: function set(val) {
        return;
      }
    }]);

    return LinkList;
  }(); // with header

  var Deque = LinkList;

  var index = {
    Stack: Stack,
    Deque: Deque,
    isArray: isArray
  };

  return index;

})));
