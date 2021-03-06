// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import eachMonthOfInterval from '.'

describe('eachMonthOfInterval', function() {
  it('returns an array with starts of days from the day of the start date to the day of the end date', function() {
    var result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12)
    })
    assert.deepEqual(result, [
      /* 1392/12/1 */ new Date(2014, 1 /* Oct */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Oct */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Oct */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* Oct */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Oct */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Oct */, 23)
    ])
  })

  it('accepts timestamps', function() {
    var result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12)
    })
    assert.deepEqual(result, [
      /* 1392/12/1 */ new Date(2014, 1 /* Oct */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Oct */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Oct */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* Oct */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Oct */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Oct */, 23)
    ])
  })

  it('handles the dates that are not starts of days', function() {
    var result = eachMonthOfInterval({
      start: /* 1392/12/15 */ new Date(2014, 2 /* Mar */, 6, 6, 35),
      end: /* 1393/5/21 */ new Date(2014, 7 /* Aug */, 12, 22, 15)
    })
    assert.deepEqual(result, [
      /* 1392/12/1 */ new Date(2014, 1 /* Oct */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Oct */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Oct */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* Oct */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Oct */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Oct */, 23)
    ])
  })

  it('handles the dates that are not containing days', function() {
    var result = eachMonthOfInterval({
      start: /* 1392/12/10 */ new Date(2014, 2 /* Mar */),
      end: /* 1393/5/10 */ new Date(2014, 7 /* Oct */)
    })
    assert.deepEqual(result, [
      /* 1392/12/1 */ new Date(2014, 1 /* Oct */, 20),
      /* 1393/1/1 */ new Date(2014, 2 /* Oct */, 21),
      /* 1393/2/1 */ new Date(2014, 3 /* Oct */, 21),
      /* 1393/3/1 */ new Date(2014, 4 /* Oct */, 22),
      /* 1393/4/1 */ new Date(2014, 5 /* Oct */, 22),
      /* 1393/5/1 */ new Date(2014, 6 /* Oct */, 23)
    ])
  })

  it('returns one month if the both arguments are on the same month', function() {
    var result = eachMonthOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/17 */ new Date(2014, 9 /* Oct */, 9, 15)
    })
    assert.deepEqual(result, [/* 1393/7/1 */ new Date(2014, 8 /* Oct */, 23)])
  })

  it('returns one month if the both arguments are the same', function() {
    var result = eachMonthOfInterval({
      start: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6, 14)
    })
    assert.deepEqual(result, [/* 1393/7/1 */ new Date(2014, 8 /* Oct */, 23)])
  })

  it('throws an exception if the start date is after the end date', function() {
    var block = eachMonthOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the start date is `Invalid Date`', function() {
    var block = eachMonthOfInterval.bind(null, {
      start: new Date(NaN),
      end: /* 1393/7/14 */ new Date(2014, 9 /* Oct */, 6)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the end date is `Invalid Date`', function() {
    var block = eachMonthOfInterval.bind(null, {
      start: /* 1393/7/20 */ new Date(2014, 9 /* Oct */, 12),
      end: new Date(NaN)
    })
    assert.throws(block, RangeError)
  })

  it('throws an exception if the interval is undefined', function() {
    var block = eachMonthOfInterval.bind(
      null,
      // $ExpectedMistake
      undefined
    )
    assert.throws(block, RangeError)
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(eachMonthOfInterval.bind(null), TypeError)
  })
})
