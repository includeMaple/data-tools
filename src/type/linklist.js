class Node {
  constructor (data) {
    this.data = data
    this.pre = null
    this.next = null
  }
}

let node = new Node()
console.log(node)

export class DoubleLinkList{
  constructor () {
    this.head = null
  }
  isEmpty () {
    return self.head === null
  }
}