let dataTools = require('../dist/data-tools.cjs.js')
let expect = require('chai').expect;

let {
  Iface,
  Stack
} = dataTools

let stackInterface = Iface({
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length'],
  name: 'stackInterface'
})

describe('Stack interface test', function (){
  it('stackInterface', function (){
    expect(Iface.ensure(new Stack(), stackInterface)).to.be.ok
  })
})
