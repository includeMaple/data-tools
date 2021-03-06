/*!
 * data-tools.js v1.0.0
 * (c) 2021-2021 include maple
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('iface')) :
  typeof define === 'function' && define.amd ? define(['iface'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.dataTools = factory(global.iface));
}(this, (function (iface) { 'use strict';

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

  // 最简单版，后续重构
  function addLog(content) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "danger";

    switch (type) {
      case 'danger':
        console.error(content);
        break;

      case 'info':
        console.log(content);
        break;
    }
  }

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

  var index = {
    Stack: Stack,
    isArray: iface.isArray
  };

  return index;

})));