let {Iface} = require('../node_modules/iface/dist/iface.cjs.js')
let expect = require('chai').expect
let dataTools = require('../dist/data-tools.cjs')

let {
  Stack
} = dataTools

let stackInterface = Iface({
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length', 'top'],
  name: 'stackInterface'
})

describe('Stack interface test', function (){
  it('stackInterface', function (){
    expect(Iface.ensure(new Stack(), stackInterface)).to.be.ok
  })
})
