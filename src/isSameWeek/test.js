// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import isSameWeek from '.'

describe('isSameWeek', function() {
  it('returns true if the given dates have the same week', function() {
    var result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === true)
  })

  it('returns false if the given dates have different weeks', function() {
    var result = isSameWeek(
      /* 1393/6/7 */ new Date(2014, 7 /* Aug */, 29),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4)
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week', function() {
    var result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      { weekStartsOn: 1 }
    )
    assert(result === false)
  })

  it('allows to specify which day is the first day of the week in locale', function() {
    var result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      {
        // $ExpectedMistake
        locale: {
          options: { weekStartsOn: 1 }
        }
      }
    )
    assert(result === false)
  })

  it('`options.weekStartsOn` overwrites the first day of the week specified in locale', function() {
    var result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      {
        weekStartsOn: 1,
        // $ExpectedMistake
        locale: {
          options: { weekStartsOn: 0 }
        }
      }
    )
    assert(result === false)
  })

  it('implicitly converts options', function() {
    var result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      // $ExpectedMistake
      { weekStartsOn: '1' }
    )
    assert(result === false)
  })

  it('accepts a timestamp', function() {
    var result = isSameWeek(
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31).getTime(),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4).getTime()
    )
    assert(result === true)
  })

  it('returns false if the first date is `Invalid Date`', function() {
    var result = isSameWeek(
      new Date(NaN),
      /* 1368/4/19 */ new Date(1989, 6 /* Jul */, 10)
    )
    assert(result === false)
  })

  it('returns false if the second date is `Invalid Date`', function() {
    var result = isSameWeek(
      /* 1365/11/22 */ new Date(1987, 1 /* Feb */, 11),
      new Date(NaN)
    )
    assert(result === false)
  })

  it('returns false if the both dates are `Invalid Date`', function() {
    var result = isSameWeek(new Date(NaN), new Date(NaN))
    assert(result === false)
  })

  it('throws `RangeError` if `options.weekStartsOn` is not convertable to 0, 1, ..., 6 or undefined', function() {
    var block = isSameWeek.bind(
      null,
      /* 1393/6/9 */ new Date(2014, 7 /* Aug */, 31),
      /* 1393/6/13 */ new Date(2014, 8 /* Sep */, 4),
      // $ExpectedMistake
      { weekStartsOn: NaN }
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 2 arguments', function() {
    assert.throws(isSameWeek.bind(null), TypeError)
    assert.throws(isSameWeek.bind(null, 1), TypeError)
  })
})
