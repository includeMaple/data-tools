const {Iface, Stack} = require('../dist/data-tools')
// var expect = require('chai').expect;
var expect = require('chai').expect;

const stackInterface = Iface({
  methods: ['pop', 'push'],
  props: ['length']
})

const exStackInterface = Iface.extends(stackInterface, {
  methods: ['s'],
  props: ['lenc']
})

describe('Stack interface test', function (){
  it('stackInterface', function (){
    expect(Iface.ensure(new Stack(), stackInterface)).to.be.ok
  })
})