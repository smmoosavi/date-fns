// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import addQuarters from '.'

describe('addQuarters', function() {
  it('adds the given number of quarters', function() {
    var result = addQuarters(/* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1), 1)
    assert.deepEqual(result, /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1))
  })

  it('accepts a timestamp', function() {
    var result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1).getTime(),
      4
    )
    assert.deepEqual(result, /* 1394/6/10 */ new Date(2015, 8 /* Sep */, 1))
  })

  it('converts a fractional number to an integer', function() {
    var result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      1.91
    )
    assert.deepEqual(result, /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1))
  })

  it('implicitly converts number arguments', function() {
    // $ExpectedMistake
    var result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      // $ExpectedMistake
      '1'
    )
    assert.deepEqual(result, /* 1393/9/10 */ new Date(2014, 11 /* Dec */, 1))
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1)
    addQuarters(date, 4)
    assert.deepEqual(date, /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1))
  })

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', function() {
    var date = /* 1393/3/31 */ new Date(2014, 5 /* Jun */, 21)
    var result = addQuarters(date, 3)
    assert.deepEqual(result, /* 1393/12/29 */ new Date(2015, 2 /* Mar */, 20))
  })

  it.skip('handles dates before 100 AD', function() {
    var initialDate = new Date(0)
    initialDate.setFullYear(-1, 10 /* Nov */, 30)
    initialDate.setHours(0, 0, 0, 0)
    var expectedResult = new Date(0)
    expectedResult.setFullYear(0, 1 /* Feb */, 29)
    expectedResult.setHours(0, 0, 0, 0)
    var result = addQuarters(initialDate, 1)
    assert.deepEqual(result, expectedResult)
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = addQuarters(new Date(NaN), 1)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = addQuarters(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(addQuarters.bind(null), TypeError)
    assert.throws(addQuarters.bind(null, 1), TypeError)
  })
})
