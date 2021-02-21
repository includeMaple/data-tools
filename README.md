

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
