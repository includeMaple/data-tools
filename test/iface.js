let {Iface} = require('iface')
let expect = require('chai').expect
let dataTools = require('../dist/data-tools.cjs')

let {
  Stack,
  Deque
} = dataTools

let stackInterface = Iface({
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length', 'top'],
  name: 'stackInterface'
})

describe('Stack interface test', function (){
  it('Stack', function (){
    expect(Iface.ensure(new Stack(), stackInterface)).to.be.ok
  })
  it('Deque', function () {
    expect(Iface.ensure(new Deque(), stackInterface)).to.be.ok
  })
})

