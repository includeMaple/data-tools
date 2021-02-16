let dataTools = require('../dist/data-tools.cjs.js')
let expect = require('chai').expect

console.log(typeof expect.then === 'function')
stackInterfaceTest(dataTools.Stack)

function stackInterfaceTest (Stack) {
  describe('stack test', function () {
    it('stack init', function () {
      let stack = new Stack()
      let length = stack.length
      let isEmpty = stack.isEmpty()
      let isFull = stack.isFull()
      expect(length).to.be.equal(0)
      expect(isFull).to.be.false
      expect(isEmpty).to.be.ok
    })
    it('stack push', function () {
      let stack = new Stack()
      stack.push('item1')
      stack.push('item2')
      let length = stack.length
      let isEmpty = stack.isEmpty()
      let isFull = stack.isFull()
      expect(length).to.be.equal(2)
      expect(isFull).to.be.false
      expect(isEmpty).to.be.false
    })
    it('stack pop', function () {
      let stack = new Stack()
      stack.push('item1')
      stack.push('item2')
      let pop = stack.pop()
      let length = stack.length
      let isEmpty = stack.isEmpty()
      let isFull = stack.isFull()
      expect(pop).to.be.equal('item2')
      expect(length).to.be.equal(1)
      expect(isEmpty).to.be.false
      expect(isFull).to.be.false
      expect(stack.pop()).to.be.equal('item1')
      expect(stack.length).to.be.equal(0)
      expect(stack.isEmpty()).to.be.ok
    })
    it('stack max', function () {
      let stack = new Stack(10)
      let length = stack.length
      let isEmpty = stack.isEmpty()
      let isFull = stack.isFull()
      let max = stack.max
      expect(length).to.be.equal(0)
      expect(isEmpty).to.be.ok
      expect(isFull).to.be.false
      expect(max).to.be.equal(10)
      for (let i=0; i<10; i++) {
        stack.push(i)
      }
      expect(stack.length).to.be.equal(10)
      expect(stack.isFull()).to.be.ok
    })
  })
}

