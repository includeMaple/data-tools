/*!
 * data-tools.js v1.0.0
 * (c) 2021-2021 include maple
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('core-js/modules/es.array.slice.js'), require('core-js/modules/es.array.index-of.js'), require('core-js/modules/es.object.assign.js'), require('core-js/modules/es.array.is-array.js'), require('core-js/modules/es.date.to-string.js'), require('core-js/modules/es.object.to-string.js'), require('core-js/modules/es.regexp.to-string.js'), require('core-js/modules/es.array.concat.js'), require('core-js/modules/es.function.name.js'), require('core-js/modules/es.regexp.exec.js'), require('core-js/modules/es.string.split.js'), require('core-js/modules/es.object.keys.js'), require('core-js/modules/es.array.filter.js'), require('core-js/modules/es.object.values.js')) :
  typeof define === 'function' && define.amd ? define(['core-js/modules/es.array.slice.js', 'core-js/modules/es.array.index-of.js', 'core-js/modules/es.object.assign.js', 'core-js/modules/es.array.is-array.js', 'core-js/modules/es.date.to-string.js', 'core-js/modules/es.object.to-string.js', 'core-js/modules/es.regexp.to-string.js', 'core-js/modules/es.array.concat.js', 'core-js/modules/es.function.name.js', 'core-js/modules/es.regexp.exec.js', 'core-js/modules/es.string.split.js', 'core-js/modules/es.object.keys.js', 'core-js/modules/es.array.filter.js', 'core-js/modules/es.object.values.js'], factory) :
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

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
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

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var INTANCE_WARNING = "Interface cannot be invoked with 'new'. ";
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


  function Iface(opt) {
    if (this instanceof Iface) {
      addLog.add(INTANCE_WARNING, 'error');
    }

    if (!isDefString(opt.name)) {
      addLog.add('Interface expect name.', 'error');
    }

    var inter = new forInterface(opt);
    if (!isObject(Iface.all)) Iface.all = {};
    Iface.all[inter.name] = inter;
    inter.constructor = Iface;
    return inter;
  }
  /**
   * extend interface
   */


  Iface["extends"] = function () {
    var tempOpt = {
      props: [],
      methods: [],
      base: [],
      name: ''
    };

    for (var i = 0; i < arguments.length; i++) {
      var obj = arguments[i];

      if (isIface(obj)) {
        tempOpt.base.push(obj);
      } else {
        tempOpt.name = obj.name || tempOpt.name;
      }

      tempOpt.props = merge(tempOpt.props, obj.props);
      tempOpt.methods = merge(tempOpt.methods, obj.methods);
    }

    return Iface(tempOpt);
  };
  /**
   * check interface
   * @param {*} obj: object
   * @param {*} iface interface
   * @return {boolean}
   */


  Iface.ensure = function (obj, iface) {
    var props = iface.props,
        methods = iface.methods;
    if (!props) props = [];
    if (!methods) methods = [];

    var _iterator = _createForOfIteratorHelper(props),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;

        if (item.indexOf('static ') === 0) {
          // static
          if (isUndefined(obj.constructor[item.split(' ')[1]])) {
            addLog.add("interface ".concat(iface.name, " expect prop ").concat(item));
            return false;
          }
        } else if (item.indexOf('class ') === 0) {
          // class
          if (isUndefined(obj[item.split(' ')[1]])) {
            addLog.add("interface ".concat(iface.name, " expect prop ").concat(item));
            return false;
          }
        } else {
          // normal
          if (isUndefined(obj[item])) {
            addLog.add("interface ".concat(iface.name, " expect prop ").concat(item));
            return false;
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var _iterator2 = _createForOfIteratorHelper(methods),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _item = _step2.value;

        if (_item.indexOf('static ') === 0) {
          // static
          if (!isFunction(obj.constructor[_item.split(' ')[1]])) {
            addLog.add("interface ".concat(iface.name, " expect methods ").concat(_item));
            return false;
          }
        } else if (_item.indexOf('class ') === 0) {
          // class
          if (!isFunction(obj[_item.split(' ')[1]])) {
            addLog.add("interface ".concat(iface.name, " expect methods ").concat(_item));
            return false;
          }
        } else {
          // normal
          if (!isFunction(obj[_item])) {
            addLog.add("interface ".concat(iface.name, " expect methods ").concat(_item));
            return false;
          }
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return true;
  };

  /**
   * string but not ''
   * @param {*} val 
   * @return {boolean}
   */

  var isDefString = function isDefString(val) {
    return typeof val === 'string' && val.length > 0;
  };
  /**
   * undefined
   * @param {*} val val
   */

  var isUndefined = function isUndefined(val) {
    return typeof val === 'undefined';
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
   * date
   * @param {*} val value
   */

  var isJSON = function isJSON(val) {
    try {
      JSON.stringify(val);
      return true;
    } catch (error) {
      return false;
    }
  };
  /**
   * iface
   * @param {*} val 
   */

  var isIface = function isIface(val) {
    return val.constructor === Iface;
  };
  /**
   * return val type
   * @param {*} val
   * @return {string} lower
   */

  var getType = function getType(val) {
    var firstUpper = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var str = Object.prototype.toString.apply(val).slice(8, -1).toLowerCase();

    if (firstUpper) {
      str = str.charAt(0).toUpperCase() + str.slice(1);
    }

    return str; // }
  };

  /**
   * merge
   */

  var merge = function merge() {
    var temp;

    switch (getType(arguments[0])) {
      case 'array':
        temp = [];

        for (var i = 0; i < arguments.length; i++) {
          for (var j = 0; j < arguments[i].length; j++) {
            if (temp.indexOf(arguments[i][j]) < 0) {
              temp.push(arguments[i][j]);
            }
          }
        }

        break;

      case 'object':
        temp = {};

        for (var _i = 0; _i < arguments.length; _i++) {
          Object.assign(temp, arguments[_i]);
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

  var Stack = /*#__PURE__*/function () {
    function Stack(max) {
      _classCallCheck(this, Stack);

      this._data = [];
      this._length = 0;
      this._max = max || 100000;
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
        if (this._length >= this._max) return true;
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
  var ExStack = /*#__PURE__*/function (_Stack) {
    _inherits(ExStack, _Stack);

    var _super = _createSuper(ExStack);

    function ExStack(max) {
      _classCallCheck(this, ExStack);

      return _super.call(this, max);
    }

    _createClass(ExStack, [{
      key: "clear",
      value: function clear() {}
    }, {
      key: "join",
      value: function join() {}
    }]);

    return ExStack;
  }(Stack);

  var Indentation = /*#__PURE__*/function () {
    function Indentation(str, opt) {
      _classCallCheck(this, Indentation);

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


    _createClass(Indentation, [{
      key: "options",
      set: function set(val) {
        this._opt = val.opt || this._opt;
        this._in = val["in"] || this._in;
        this._newLine = val._newLine || this._newLine;
      }
    }, {
      key: "addIn",
      value: function addIn(str, num, inStr) {
        inStr = inStr || this._in;

        for (var j = 0; j < num; j++) {
          str = inStr + str;
        }

        return str;
      }
    }, {
      key: "getStr",
      value: function getStr() {
        for (var i = 0; i < this._str.length; i++) {
          // 1. value not in opt keys or values
          if (Object.values(this._opt).indexOf(this._str[i]) < 0 && Object.keys(this._opt).indexOf(this._str[i]) < 0) {
            this._stack.push(this._str[i]); // 2. value in keys(left)
            // right: add newline, in

          } else if (this._str[i] in this._opt) {
            this._keyNum++;

            this._stack.push(this._str[i]);

            this._stack.push(this._newLine);

            this._stack.push(this.addIn('', this._keyNum)); // 3. value in values(right)
            // left: add newline, in
            // right: check if ',',add newline after ',', else add newline, in

          } else {
            var tempStack = new Stack();
            tempStack.push(this._str[i]); // left

            this._stack.push(this._newLine);

            this._stack.push(this.addIn('', this._keyNum - 1));

            this._keyNum--;
            var tempStr = '';
            /* eslint-disable */

            while (true) {
              var item = this._stack.pop();

              tempStack.push(item);

              if (item in this._opt) {
                while (tempStack.length) {
                  tempStr += tempStack.pop();
                } // right


                if (this._str[i + 1] === ',') {
                  tempStr = tempStr + ',' + this._newLine;
                  i++;
                } else if (Object.values(this._opt).indexOf(this._str[i + 1]) < 0) {
                  tempStr = tempStr + this._newLine;
                }

                tempStr += this.addIn('', this._keyNum);

                this._stack.push(tempStr);

                break;
              }
            }
          }
        }

        return this._stack.pop();
      }
    }]);

    return Indentation;
  }();

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

  var Json = /*#__PURE__*/function () {
    function Json(data) {
      _classCallCheck(this, Json);

      if (!isUndefined(data)) {
        if (!isJSON(data)) {
          addLog.add('this is not json', 'error');
        }

        this.data = data;
      }
    }

    _createClass(Json, [{
      key: "deal",
      value: function deal() {
        this.init();
        this.filter();
        this.update();
      }
    }, {
      key: "init",
      value: function init() {}
    }, {
      key: "filter",
      value: function filter() {
        if (!this.opt.filter) return;

        switch (getType(this.filter)) {
                }
      }
    }, {
      key: "update",
      value: function update() {}
      /**
       * 
       * @param {*} data 
       * @param {*} isIndentation 
       * @param {*} opt 
       */

    }], [{
      key: "stringify",
      value: function stringify(data) {
        var isIndentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var opt = arguments.length > 2 ? arguments[2] : undefined;
        if (!isJSON(data)) return 'data is not a json';
        if (!isIndentation) return JSON.stringify(data);
        opt = opt || {
          '{': '}',
          '[': ']'
        };
        return new Indentation(JSON.stringify(data), opt).getStr();
      }
    }, {
      key: "parse",
      value: function parse(data) {
        var isIndentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!isIndentation) return JSON.parse(data);
      }
    }]);

    return Json;
  }();

  var index = {
    Stack: Stack,
    Iface: Iface,
    Json: Json,
    ExStack: ExStack
  };

  return index;

})));
