
[![Github Releases](https://img.shields.io/npm/l/datatool.svg)](https://github.com/includeMaple/datatool) 
[![Github Releases](https://img.shields.io/npm/v/datatool.svg)](https://github.com/includeMaple/datatool)
[![Github Releases](https://img.shields.io/npm/dm/datatool.svg)](https://github.com/includeMaple/datatool)
[![](https://travis-ci.org/includeMaple/datatool.svg?branch=main)](https://travis-ci.org/includeMaple/datatool)

# 安装使用

```javascript
npm install datatool --save
```

```javascript
import datatool from 'datatool'
let {Stack} = datatool
```

or

```javascript
<script src='../dist/data-tools.min.js'></script>
<script>
  let {Stack} = dataTools
</script>
```

# Stack && Queue

## what：什么是Stack与Queue

Stack和Queue是两种抽象数据结构：

1. Stack：LIFO(last-in, first-out)后进先出
1. Queue：FIFO(first in first out)先进先出

![sq](/examples/images/1-1stackqueue.png)
表达了日常生活常见的两种方式（以下情况都不考虑插队，中途调换顺序）：

1. 乘坐电梯，LIFO，先进去的人最后出电梯
1. 一堆书，LIFO，一本本顺序拿书，先放上去的压在底部，最后拿到
1. 乘坐扶梯，FIFO，先到的人先下扶梯
1. 排队买票，FIFO，先来的人先排队先买到票

注：抽象数据类型意味着上面只是定义了Stack和Queue的数据类型，没有规定其实现，对于Stack和Queue来说，可以使用顺序存储，也可以使用链式存储（单链表或双链表）

## 双端队列Deque

顾名思义双端队列两端都可以进出

1. 堵住其中一端不允许进出，就是Stack
1. 一端只允许进，另一端只允许出就是Queue
![deque](/examples/images/1-2deque.png)

## Stack interface

Stack和Deque都实现了stackInterface接口，当需要Stack功能时，读者可以根据自己的需要使用Stack或Deque

```javascript
{
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length', 'top'],
  name: 'stackInterface'
}
```

注：两者在Stack功能上保持一致，并且可以相互替换，区别在于Stack是顺序存储，Deque是链式存储（双向链表）
