let dataTools = require('../dist/data-tools.cjs.js')
let expect = require('chai').expect;

let {
  Iface,
  Stack,
  Json,
  ExStack
} = dataTools

let iface = Iface({
  methods: ['class extends', 'class ensure'],
  props: ['class all'],
  name: 'iface'
})
let stackInterface = Iface({
  methods: ['pop', 'push', 'isEmpty', 'isFull'],
  props: ['length', 'top'],
  name: 'stackInterface'
})
let exStackInterface = Iface.extends(stackInterface, {
  methods: ['clear', 'join'],
  name: 'exStackInterface'
})
let jsonInterface = Iface({
  methods: ['static stringify', 'static parse', 'toJson'],
  name: 'jsonInterface'
})

let dealInterface = Iface({
  methods: ['deal', 'init', 'filter', 'update'],
  name: 'dealInterface'
})


describe('Iface self', function (){
  it('iface', function (){
    expect(Iface.ensure(Iface, iface)).to.be.ok
  })
})
describe('Stack interface test', function (){
  it('stackInterface', function (){
    expect(Iface.ensure(new Stack(), stackInterface)).to.be.ok
  })
  it('exStackInterface', function () {
    expect(Iface.ensure(new ExStack(), exStackInterface)).to.be.ok
  })
})

describe('Json test', function () {
  it ('json jsonInterface', function () {
    expect(Iface.ensure(new Json, jsonInterface)).to.be.ok
  })
  it('json dealInterface', function (){
    expect(Iface.ensure(new Json(),dealInterface)).to.be.ok
  })
})
