// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import setMilliseconds from '.'

describe('setMilliseconds', function() {
  it('sets the milliseconds', function() {
    var result = setMilliseconds(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300)
    )
  })

  it('accepts a timestamp', function() {
    var result = setMilliseconds(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 750).getTime(),
      755
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 15, 755)
    )
  })

  it('converts a fractional number to an integer', function() {
    var result = setMilliseconds(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      300.999
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300)
    )
  })

  it('implicitly converts number arguments', function() {
    var result = setMilliseconds(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      // $ExpectedMistake
      '300'
    )
    assert.deepEqual(
      result,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 300)
    )
  })

  it('does not mutate the original date', function() {
    var date = /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    setMilliseconds(date, 137)
    assert.deepEqual(
      date,
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500)
    )
  })

  it('returns `Invalid Date` if the given date is invalid', function() {
    var result = setMilliseconds(new Date(NaN), 300)
    assert(result instanceof Date && isNaN(result))
  })

  it('returns `Invalid Date` if the given amount is NaN', function() {
    var result = setMilliseconds(
      /* 1393/6/10 */ new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500),
      NaN
    )
    assert(result instanceof Date && isNaN(result))
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(setMilliseconds.bind(null), TypeError)
    assert.throws(setMilliseconds.bind(null, 1), TypeError)
  })
})
