// @flow
/* eslint-env mocha */

import assert from 'power-assert'
import getDate from '.'

describe('getDate', function() {
  it('returns the day of the month of the given date', function() {
    var result = getDate(/* 1390/12/10 */ new Date(2012, 1 /* Feb */, 29))
    assert(result === 10)
  })

  it('accepts a timestamp', function() {
    var result = getDate(
      /* 1393/10/10 */ new Date(2014, 11 /* Dec */, 31).getTime()
    )
    assert(result === 10)
  })

  it('returns NaN if the given date is invalid', function() {
    var result = getDate(new Date(NaN))
    assert(isNaN(result))
  })

  it('throws TypeError exception if passed less than 1 argument', function() {
    assert.throws(getDate.bind(null), TypeError)
  })
})
