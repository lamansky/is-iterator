'use strict'

const assert = require('assert')
const isIterator = require('.')

describe('isIterator()', function () {
  it('should return false if given an iterable', function () {
    assert.strictEqual(false, isIterator([]))
  })

  it('should return false if given null', function () {
    assert.strictEqual(false, isIterator(null))
  })

  it('should return false if called with no arguments', function () {
    assert.strictEqual(false, isIterator([]))
  })

  it('should return false if given an iterator function', function () {
    assert.strictEqual(false, isIterator([][Symbol.iterator]))
  })

  it('should return true if given an iterator', function () {
    assert.strictEqual(true, isIterator([][Symbol.iterator]()))
  })

  it('should return false if given a regular object with a next() method', function () {
    assert.strictEqual(false, isIterator({next () {}}))
  })
})
