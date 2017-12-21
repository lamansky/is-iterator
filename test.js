'use strict'

const assert = require('assert')
const isIterator = require('.')

describe('isIterator()', function () {
  it('should return false if given an iterable', function () {
    assert(!isIterator([]))
  })

  it('should return false if given null', function () {
    assert(!isIterator(null))
  })

  it('should return false if called with no arguments', function () {
    assert(!isIterator([]))
  })

  it('should return false if given an iterator function', function () {
    assert(!isIterator([][Symbol.iterator]))
  })

  it('should return true if given an iterator', function () {
    assert(isIterator([][Symbol.iterator]()))
  })
})
