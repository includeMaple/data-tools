
[![Github Releases](https://img.shields.io/npm/l/datatool.svg)](https://github.com/includeMaple/datatool) 
[![Github Releases](https://img.shields.io/npm/v/datatool.svg)](https://github.com/includeMaple/datatool)
[![Github Releases](https://img.shields.io/npm/dm/datatool.svg)](https://github.com/includeMaple/datatool)
<<<<<<< HEAD

=======
[![](https://travis-ci.org/includeMaple/datatool.svg?branch=main)](https://travis-ci.org/includeMaple/datatool)
>>>>>>> 5ecadc84d2724f3c1074a6fcb652209ce167a0e8

# 安装

```npm install datatool --save```


```javascript
<script src='../dist/data-tools.min.js'></script>
```

# 使用

```javascript
import datatool from 'datatool'
let {Stack} = datatool
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
