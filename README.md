
[![Github Releases](https://img.shields.io/npm/l/datatool.svg)](https://github.com/includeMaple/datatool) 
[![Github Releases](https://img.shields.io/npm/v/datatool.svg)](https://github.com/includeMaple/datatool)
[![Github Releases](https://img.shields.io/npm/dm/datatool.svg)](https://github.com/includeMaple/datatool)



# 安装
```npm install datatool --save```


```javascript
<script src='../dist/data-tools.min.js'></script>
```

# 使用
```javascript
import datatool from 'datatool'
let {Iface, Json, Stack} = datatool
```


# Json
## interface
```javascipt
{
  methods: ['static stringify', 'static parse'],
  name: 'jsonInterface'
}
```
## json序列化
普通序列化
```javascript
let str =Json.stringify(json)
```
给json序列化的同时添加缩进、换行
```javascript
    let str =Json.stringify(json, true)
```


# Stack
## interface
```javascript
{
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length', 'top'],
  name: 'stackInterface'
}
```

# Interface
## interface
```javascript
{
  methods: ['class extends', 'class ensure'],
  props: ['class all'],
  name: 'iface'
}
```

## 定义接口
```javascript
let stackInterface = Iface({
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length', 'top'],
  name: 'stackInterface'
})
```
注意：接口不能使用new关键字

## 接口继承
```javascript
let exStackInterface = Iface.extends(stackInterface, {
  methods: ['clear', 'join'],
  name: 'exStackInterface'
})
```

## 静态方法与类方法
```javascript
let jsonInterface = Iface({
  methods: ['static stringify', 'static parse', 'toJson'],
  name: 'jsonInterface'
})
let iface = Iface({
  methods: ['class extends', 'class ensure'],
  props: ['class all'],
  name: 'iface'
})
```

## 接口检查
Iface.ensure(检查对象, 接口)，检查通过返回true
```javascript
Iface.ensure(new Stack(), stackInterface)
```
## 查看所有接口
```javascript
Iface.all
```
## 类型判断
```javascript
let stackInterface = Iface({
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length', 'top'],
  name: 'stackInterface'
})
if (stackInterface.constructor === Iface) return 'stackInterface is a interface'
```

