'use strict'

const isObject = require('is-object')

module.exports = iter => isObject(iter) && typeof iter.next === 'function'
